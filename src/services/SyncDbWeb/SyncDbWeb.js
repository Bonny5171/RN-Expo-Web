import { services } from '../../../config';

const processDownload = async (args, changePorcent, changeIndeterminate) => {
  const {
    nome, host, version, path
  } = args;
  const nameDb = `sfa-${nome}`;
  const url = `${host}${version}${path.db}`;

  window.webSqlManager.on('downloadProgress', (status) => {

    console.log('NOME', nome);
    const percentage = (status.percent / 100).toFixed(2);

    const objStr = `{ "${nome}": ${percentage} }`;
    const obj = JSON.parse(objStr);
    changePorcent(obj);

    const objIndeterminate = `{ "${nome}": false }`;
    const objInt = JSON.parse(objIndeterminate);
    changeIndeterminate(objInt);

    console.log(`Status download: ${percentage}%`);
  });

  console.log('Iniciando donwloading...', nome);

  await window.openDatabase(nameDb, '', '', 5000 * 1024 * 1024);
  const response = await window.webSqlManager.load(nameDb, url, 'no-token');

  console.log('>>>>>>>>>>>>>', response.message);
};

const getChange = async (cfg, id) => {
  const {
    nome, host, version, path
  } = cfg;
  const url = `${host}${version}${path.trackingChanges}/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const reponseJson = await response.json();
    return reponseJson.changed_fields_statement;
  }
  console.log(`Error ao buscar a change id "${id}" do serviço ${nome}`);
  throw new Error(`Error ao buscar a change id "${id}" do serviço ${nome}`);
};

const execSQLCommand = async (name, command) => {
  const db = await window.openDatabase(name, '', '', 5000 * 1024 * 1024);

  const result = new Promise((resolve) => {
    db.transaction((txn) => {
      txn.executeSql(command, [], (tx, res) => resolve(res));
    });
  });

  await result;
};

const getTablesAndTrackingChangeLocal = async (name) => {
  console.log('Buscando tabelas e seu tracking-change-id');

  const db = await window.openDatabase(name, '', '', 5000 * 1024 * 1024);

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

  // Parse de lista de objetos para lista do tipo array.
  const arrRows = Array.from(Object.keys(rows), k => rows[k]);

  return arrRows;
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
  console.log(`Error ao buscar o count tracking change do serviço ${nome}`);
  throw new Error(`Error ao buscar o count tracking change do serviço ${nome}`);
};

const onSync = async ({ service, changePorcent, changeIndeterminate }) => {
  try {
    const cfg = services.find(srv => srv.nome === service);
    if (!cfg) {
      throw new Error(`Oooops! para o serviço ${service} não foi localizado sua configuração para prosseguir.`);
    }
    await processDownload(cfg, changePorcent, changeIndeterminate);
    console.log('PROCESSO FINALIZADO');
  } catch (error) {
    console.log(`${error.message}`);
  }
};

const onSyncUpdate = async (service) => {
  try {
    // Valida o config
    const cfg = services.find(srv => srv.nome === service);
    if (!cfg) {
      throw new Error(`Oooops! para o serviço ${service} não foi localizado sua configuração para prosseguir.`);
    }
    const dbName = `sfa-${service}`;
    const changeByTables = await getTablesAndTrackingChangeLocal(dbName);

    // Loop por tabela.
    changeByTables.forEach(async (change) => {
      console.log(`Iniando analize da tabela "${change.table_name}"`);
      console.log(`Último tracking-change LOCAL: ${change.tracking_change_id}`);

      // Busca ultimo tracking change id REMOTO.
      const trackingChangeRemote = await getTrackingChangesCountRemote(cfg);
      console.log(`Último tracking-change REMOTO: ${trackingChangeRemote}`);

      // Compara se o tracking change id REMOTO é maior que o LOCAL.
      if (trackingChangeRemote > change.tracking_change_id) {
        let i = change.tracking_change_id;
        let promises = [];

        // Enquanto o indice o track Local não for igual ao indice o remoto
        // continuio buscando as changes e criando um array de promesas.
        do {
          i += 1;
          console.log(`Buscando trackchangeid: ${i}`);
          promises.push(getChange(cfg, i));
        } while (i < trackingChangeRemote);

        // Aplicar as promessas e obtem as changes
        const changes = await Promise.all(promises);

        // Zeras o array de promessas.
        promises = [];

        // Preenche o array com promessas de aplicação das changes.
        changes.forEach((command) => {
          console.log(`Aplicando change "${command}"`);
          promises.push(execSQLCommand(dbName, command));
        });

        // Aplica as changes.
        await Promise.all(promises);
      }

      console.log(`Finalizando analize da tabela "${change.table_name}"`);
    });
  } catch (error) {
    console.log(`${error.message}`);
  }
};

export {
  onSync,
  onSyncUpdate,
};