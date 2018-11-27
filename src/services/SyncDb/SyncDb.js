import SQLite from 'react-native-sqlite-2';
import RNFetchBlob from 'rn-fetch-blob';
import { services } from '../../../config';
import { unzip } from 'react-native-zip-archive';

const dirBase = RNFetchBlob.fs.dirs.DocumentDir;

const hash = () => Math.random().toString(36).substring(2, 15)
  + Math.random().toString(36).substring(2, 15);

const mkdir = async (folder) => {
  const dir = `${dirBase}/${folder}`;
  const diretorioExiste = await RNFetchBlob.fs.isDir(dir);
  if (!diretorioExiste) {
    await RNFetchBlob.fs.mkdir(dir);
  }
};

const printf = (that, msg) => that.setState({ outputMsg: `${that.state.outputMsg} \n ${msg}` });

const processDownload = async (args, changePorcent, changeIndeterminate) => {
  const {
    nome, host, version, path
  } = args;

  // Constroi path do diretorio e diretorio temporario.
      const dir = `${dirBase}/dbs/sfa-${nome}`;
  const dirTemp = `${dirBase}/dbs/sfa-${nome}/tmp`;

  // Cria os diretorios
  await mkdir(dir);
  await mkdir(dirTemp);

  // Configura e executa um GET na url recebida com
  // argumento para obter o banco de dados zipado.
  const cfg = { path: `${dirTemp}/sfa-${hash()}.zip` };
  const url = `${host}${version}${path.db}`;

  const res = await RNFetchBlob
    .config(cfg)
    .fetch('GET', url)
    .progress((received, total) => {
      const percentage = (received / total).toFixed(2);

      const objStr = `{ "${nome}": ${percentage} }`;
      const obj = JSON.parse(objStr);
      changePorcent(obj);

      const objIndeterminate = `{ "${nome}": false }`;
      const objInt = JSON.parse(objIndeterminate);
      changeIndeterminate(objInt);

      console.log(`Status download: ${percentage}%`);
    });

  // se chegou aqui ja baixou 100% do banco.
  const objStr = `{ "${nome}": 1 }`;
  const obj = JSON.parse(objStr);
  changePorcent(obj);

  // Unzip arquivo.
  try {
    await unzip(res.path(), dir);
    console.log('Unzip db');
  } catch (error) {
    console.log('Não foi possivel descompactar arquivo');
    return;
  }

  // Deleta arquivo zip.
  await RNFetchBlob.fs.unlink(cfg.path);
  console.log('Arquivo zip deletado.');
};

const getTrackingChangesCountRemote = async (cfg) => {
  const {
    nome, host, version, path
  } = cfg;
  const url = `${host}${version}${path.trackingChanges}/count`;
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    return json.count;
  }
  throw new Error(`Error ao buscar o count tracking change do serviço ${nome}`);
};

const getChange = async (cfg, id, that) => {
  const {
    nome, host, version, path
  } = cfg;
  const url = `${host}${version}${path.trackingChanges}/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const reponseJson = await response.json();
    return reponseJson.changed_fields_statement;
  }
  printf(that, `Error ao buscar a change id "${id}" do serviço ${nome}`);
  throw new Error(`Error ao buscar a change id "${id}" do serviço ${nome}`);
};

const execSQLCommand = async (name, command) => {
  const db = await SQLite.openDatabase(name, '1.0', '', 1);

  const result = new Promise((resolve) => {
    db.transaction((txn) => {
      txn.executeSql(command, [], (tx, res) => resolve(res));
    });
  });

  await result;
};

const getTablesAndTrackingChangeLocal = async (name, that) => {
  printf(that, 'Buscando tabelas e seu tracking-change-id');

  const db = await SQLite.openDatabase(name, '1.0', '', 1);

  // Realiza um select na View do banco local.
  const command = 'select table_name, tracking_change_id from  vw_all_tracking_changes';

  // Obtem as tabelas e o tracking_change de cada tabela.
  const result = new Promise((resolve) => {
    db.transaction((txn) => {
      txn.executeSql(command, [], (tx, res) => resolve(res));
    });
  });

  // Executa o select e desconstroi o resultado.
  const { rows } = await result;

  return rows._array;
};

const onSync = async ({ service, changePorcent, changeIndeterminate }) => {
  try {
    const cfg = services.find(srv => srv.nome === service);
    if (!cfg) {
      throw new Error(`Oooops! para o serviço ${service} não foi localizado sua configuração para prosseguir.`);
    }
    await mkdir('dbs');
    await processDownload(cfg, changePorcent, changeIndeterminate);
    console.log('PROCESSO FINALIZADO');
  } catch (error) {
    console.log(`ERRO: ${error}.`);
  }
};

const onSyncUpdate = async (service, that) => {
  try {
    // Valida o config
    const cfg = services.find(srv => srv.nome === service);
    if (!cfg) {
      throw new Error(`Oooops! para o serviço ${service} não foi localizado sua configuração para prosseguir.`);
    }
    const dbName = `dbs/sfa-${service}/sfa-${service}.db`;
    const changeByTables = await getTablesAndTrackingChangeLocal(dbName, that);

    // Loop por tabela.
    changeByTables.forEach(async (change) => {
      printf(that, `Iniando analize da tabela "${change.table_name}"`);
      printf(that, `Último tracking-change LOCAL: ${change.tracking_change_id}`);

      // Busca ultimo tracking change id REMOTO.
      const trackingChangeRemote = await getTrackingChangesCountRemote(cfg, that);
      printf(that, `Último tracking-change REMOTO: ${trackingChangeRemote}`);

      // Compara se o tracking change id REMOTO é maior que o LOCAL.
      if (trackingChangeRemote > change.tracking_change_id) {
        let i = change.tracking_change_id;
        let promises = [];

        // Enquanto o indice o track Local não for igual ao indice o remoto
        // continuio buscando as changes e criando um array de promesas.
        do {
          i += 1;
          printf(that, `Buscando trackchangeid: ${i}`);
          promises.push(getChange(cfg, i, that));
        } while (i < trackingChangeRemote);

        // Aplicar as promessas e obtem as changes
        const changes = await Promise.all(promises);

        // Zeras o array de promessas.
        promises = [];

        // Preenche o array com promessas de aplicação das changes.
        changes.forEach((command) => {
          printf(that, `Aplicando change "${command}"`);
          promises.push(execSQLCommand(dbName, command));
        });

        // Aplica as changes.
        await Promise.all(promises);
      }

      printf(that, `Finalizando analize da tabela "${change.table_name}"`);
    });
  } catch (error) {
    printf(that, `${error.message}`);
  }
};

export {
  onSync,
  onSyncUpdate,
};