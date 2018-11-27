import SQLite from 'react-native-sqlite-2';
require('es5-ext/array/#/@@iterator/implement');
const squel = require('squel');

const service = 'account';

const dbName = `dbs/sfa-${service}/sfa-${service}.db`;

const fetch = async (cb) => {
  const query = squel.select()
        .from('sf_account')
        .toString();

  const db = await SQLite.openDatabase(dbName, '1.0', '', 1);

  const result = new Promise((resolve) => {
    db.transaction((txn) => {
      txn.executeSql(query, [], (tx, res) => resolve(res));
    });
  });

  // Executa o select e desconstroi o resultado.
  const { rows } = await result;

  const data = rows._array.map((item) => {
    return {
      key: item.id,
      fantasyName: item.sf_name,
      reason: 'LOJA Ayers Hull LTDA',
      phone: item.sf_phone,
      cnpj: '101.869.078/0001-15',
      phone2: item.sf_phone,
      contact: item.sf_name,
      client: item.sf_name,
      code: item.id,
      situation: 'Liberado',
      sector: 'Primeiro',
      positivation: '',
      punctual: 'BOM',
      encarte: 'REGULAR',
      stores: [
        {
          name: 'Matriz COM.DE CALÇADOS LTDA',
          headquarter: true,
          isChosen: true,
        },
        {
          name: 'Filial2 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial3 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial4 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial5 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial6 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial7 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial8 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial9 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial10 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial11 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial12 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial13 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial14 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial15 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
      ]
    };
  });

  cb(data);
};

const filter = async (param, cb) => {
  let query = squel.select()
        .from('sf_account');

  // Filtros
  const {
    name, positivacao, sector, situation,
  } = param;

  if (name) {
    query = query.where('sf_name LIKE ?', `%${name}%`);
  }

  const { a, de } = positivacao;
  if (a) {
    console.log('Filtro de positivação "a", ainda não implementado, não existe colunas para filtro na tabela.');
    query = query.where(`sf_positivation > ${a}`);
  }

  if (de) {
    console.log('Filtro de positivação "de", ainda não implementado, não existe colunas para filtro na tabela.');
    query = query.where(`sf_positivation < ${de}`);
  }

  if (sector) {
    console.log('Filtro de sector, ainda não implementado, não existe colunas para filtro na tabela.');
    query = query.where('sf_sector LIKE ?', `%${sector}%`);
  }

  if (situation) {
    console.log('Filtro de situation, ainda não implementado, não existe colunas para filtro na tabela.');
    query = query.where('sf_situation LIKE ?', `%${situation}%`);
  }

  const db = await SQLite.openDatabase(dbName, '1.0', '', 1);

  const result = new Promise((resolve) => {
    db.transaction((txn) => {
      txn.executeSql(query.toString(), [], (tx, res) => resolve(res));
    });
  });

  // Executa o select e desconstroi o resultado.
  const { rows } = await result;

  const data = rows._array.map((item) => {
    return {
      key: item.id,
      fantasyName: item.sf_name,
      reason: 'LOJA Ayers Hull LTDA',
      phone: item.sf_phone,
      cnpj: '101.869.078/0001-15',
      phone2: item.sf_phone,
      contact: item.sf_name,
      client: item.sf_name,
      code: item.id,
      situation: 'Liberado',
      sector: 'Primeiro',
      positivation: '',
      punctual: 'BOM',
      encarte: 'REGULAR',
      stores: [
        {
          name: 'Matriz COM.DE CALÇADOS LTDA',
          headquarter: true,
          isChosen: true,
        },
        {
          name: 'Filial2 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial3 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial4 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial5 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial6 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial7 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial8 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial9 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial10 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial11 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial12 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial13 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial14 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
        {
          name: 'Filial15 COM.DE CALÇADOS LTDA',
          headquarter: false,
          isChosen: false,
        },
      ]
    };
  });

  cb(data);
};

export { fetch, filter, };