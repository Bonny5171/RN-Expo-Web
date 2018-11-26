
const INITIAL_STATE = {
    // True = Lista em Box, False = Lista em Grid
    list: true,

    previous: {
      key: '0',
      fantasyName: 'XPTO ANTERIOR',
      reason: 'LOJA XPTO DE CALÇADOS LTDA',
      phone: '(XX) XXXX-XXXX',
      cnpj: '101.869.078/0001-15',
      contact: 'Fulano de Tal Barbosa',
      phone2: '(XX) XXXX-XXXX',
      code: '5bb4e188',
      situation: 'BLOQUEADO',
    },
    // Cliente atual
    client: {
      key: '1',
      fantasyName: 'XPTO CALÇADOS',
      reason: 'LOJA XPTO DE CALÇADOS LTDA',
      phone: '(XX) XXXX-XXXX',
      cnpj: '101.869.078/0001-15',
      contact: 'Fulano de Tal Barbosa',
      phone2: '(XX) XXXX-XXXX',
      code: '5bb4e188',
      situation: 'BLOQUEADO',
    },

    next: {
      key: '2',
      fantasyName: 'XPTO SEGUINTE',
      reason: 'LOJA XPTO DE CALÇADOS LTDA',
      phone: '(XX) XXXX-XXXX',
      cnpj: '101.869.078/0001-15',
      contact: 'Fulano de Tal Barbosa',
      phone2: '(XX) XXXX-XXXX',
      code: '5bb4e188',
      situation: 'BLOQUEADO',
    },

    buttons: [
      {
        name: 'sortPopUp',
        isChosen: false,
      },
      {
        name: 'filterPopUp',
        isChosen: false,
      },
    ],

    sort: [
      {
        name: 'sortName',
        isChosen: false,
      },
      {
        name: 'sortCode',
        isChosen: true,
        // False = decresente, True = Ascendente
        order: false,
      },
      {
        name: 'sortCliente',
        isChosen: false
      },
      {
        name: 'sortSetor',
        isChosen: false
      },
      {
        name: 'sortStatus',
        isChosen: false
      },
      {
        name: 'sortPontual',
        isChosen: false
      },
      {
        name: 'sortEncarte',
        isChosen: false
      },
    ],

    popUpFilter: [
      {
        current: '',
        name: 'dropSituacao',
        isChosen: false
      },
      {
        current: '',
        name: 'dropSetor',
        isChosen: false
      },
    ],

    data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'update_popup': {
      const buttons = updateComponent(action.name, state.buttons);
      return { ...state, buttons };
    }
    case 'update_dropdown': {
      const dropDowns = updateComponent(action.name, state.popUpFilter);
      return { ...state, popUpFilter: dropDowns };
    }
    case 'update_sort': {
      const sort = updateSort(action.name, state.sort);
      return { ...state, sort };
    }
    case 'update_current': {
      const newCurrent = updateCurrent(action.name, action.newCurrent, state.popUpFilter);
      return { ...state, popUpFilter: newCurrent };
    }
    case 'update_list': {
      return { ...state, list: !state.list };
    }
    case 'filter_list': {
      const { data } = action;
      const buttons = [
        { name: 'sortPopUp', isChosen: false },
        { name: 'filterPopUp', isChosen: false },
      ];

      return { ...state, buttons, data };
    }
    case 'current_client': {
      const currClient = action.client.key;
      const newState = { ...state };
      newState.client = action.client;
      const list = [...newState.data];

      newState.previous = { ...list[currClient - 1] };
      newState.next = { ...list[currClient + 1] };

      // Caso seja o primeiro cliente da lista
      if (currClient === 0) {
        // Coloca o ultimo da lista como anterior
        newState.previous = { ...list[list.length - 1] };
        newState.next = { ...list[currClient + 1] };
      } else if (currClient === list.length - 1) {
        // Caso seja o ultimo da lista, o próximo será o primeiro item
        newState.previous = { ...list[currClient - 1] };
        newState.next = { ...list[0] };
      }
      return { ...state, ...newState };
    }
    case 'next_client': {
      const newState = { ...state };
      // Atualiza o cliente anterior com o atual
      newState.previous = { ...state.client };
      // Pega o cliente atual(atualizado) na posição e o próximo
      const currAndNext = nextClient(state.data, state.client);
      newState.client = { ...currAndNext[0] };
      // Pega o próximo cliente
      newState.next = { ...currAndNext[1] };

      return { ...state, ...newState };
    }
    case 'previous_client': {
      const newState = { ...state };
      // Atualiza o cliente atual com o anterior
      newState.client = { ...newState.previous };
      // Pega o cliente atual(atualizado) na posição e o próximo
      const previousAndNext = previousClient(state.data, newState.client);
      newState.previous = { ...previousAndNext[0] };
      // Pega o próximo cliente
      newState.next = { ...previousAndNext[1] };

      return { ...state, ...newState };
    }
    case 'update_base': {
      return { ...state, data: [...action.clients], initialData: [...action.clients] };
    }
    default:
      return state;
  }
};

const filtar = (filters, data) => {
  const {
    name,
    situation,
    sector,
    positivacao,
    code,
  } = filters;
  let dataFilter = Object.assign([], data);
  if (name) dataFilter = dataFilter.filter((el) => el.fantasyName.toLowerCase().includes(name.toLowerCase()));
  if (name) dataFilter = dataFilter.filter((el) => el.fantasyName.toLowerCase().indexOf(name.toLowerCase()) > -1);
  if (situation) dataFilter = dataFilter.filter((el) => el.situation === situation);
  if (sector) dataFilter = dataFilter.filter((el) => el.sector === sector);
  if (code) dataFilter = dataFilter.filter((el) => el.code === code);
  if (positivacao !== undefined) {
    if (positivacao.de) {
      dataFilter = dataFilter.filter((el) => {
        const key = parseInt(el.key, 0);
        const de = parseInt(positivacao.de, 0);
        if (de && key) {
          return de <= key;
        }
        return false;
      });
    }
    if (positivacao.a) {
      dataFilter = dataFilter.filter((el) => {
        const key = parseInt(el.key, 0);
        const a = parseInt(positivacao.a, 0);
        if (a && key) {
          return a >= key;
        }
        return false;
      });
    }
  }
  return dataFilter;
};

const updateCurrent = (name, newCurrent, components) => {
    const updatedCurrent = components.slice();

    updatedCurrent.forEach((component) => {
        if (component.name === name) {
          component.current = newCurrent;
        }
    });

    return updatedCurrent;
};

const updateSort = (name, components) => {
  const updatedComponents = components.slice();
  updatedComponents.forEach(component => {
    if (component.isChosen) {
      component.isChosen = false;
    }
    if (component.name === name) {
      component.isChosen = true;
    }
    if (name === 'sortCode' && component.isChosen) {
      component.isChosen = true;
      component.order = !component.order;
    }
  });

  return updatedComponents;
};

const updateComponent = (name, components) => {
  const updatedComponents = components.slice();
  updatedComponents.forEach(component => {
    if (component.isChosen) {
      component.isChosen = false;
    } else if (component.name === name) {
      component.isChosen = true;
    }
    if (name === 'sortCode' && component.isChosen) {
      component.isChosen = true;
      component.order = !component.order;
    }
  });

  return updatedComponents;
};

const nextClient = (clients, current) => {
  // Pega a posição do cliente atual
  const currIndex = parseInt(current.key, 10);
  // Caso não seja o ultimo ou o penúltimo
  if (currIndex < clients.length - 2) {
    return [clients[currIndex + 1], clients[currIndex + 2]];
  } else if (currIndex === clients.length - 2) {
    return [clients[currIndex + 1], clients[0]];
  }
  // Caso seja o ultima da lista, o segundo elemento se torna o próximo do próximo
  return [clients[0], clients[1]];
};

const previousClient = (clients, current) => {
  // Pega a posição do cliente atual
  const currIndex = parseInt(current.key, 10);
  // Caso seja o ultimo da lista, o seguinte se torna o primeiro da lista
  if (currIndex === clients.length - 1) {
    return [clients[currIndex - 1], clients[0]];
  } else if (currIndex === 0) {
    // Caso seja o primeiro da lista, o anterior se torna o ultimo da lista
    return [clients[clients.length - 1], clients[currIndex + 1]];
  }
  return [clients[currIndex - 1], clients[currIndex + 1]];
};