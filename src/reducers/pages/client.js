import { updateComponent } from './common/functions';

const INITIAL_STATE = {
  cartButton: false,

  extraInfo: [
    {
      name: 'financeiras',
      isChosen: true
    },
    {
      // Nome a ser atualizado
      name: 'localizacao',
      isChosen: false
    },
    {
      name: 'descontos',
      isChosen: false
    },
  ],
  // Cliente definido atual
  client: {
    name: '',
    stores: [
      {
        name: 'DEFAULT COM.DE CALÇADOS LTDA',
        headquarter: true,
        isChosen: true,
      },
      {
        name: 'XYZAX COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      {
        name: 'GPAKO COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      {
        name: 'EASDZ COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      {
        name: 'ABDEU COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      {
        name: 'QSDFA COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      {
        name: 'YUIJE COM.DE CALÇADOS LTDA',
        headquarter: false,
        isChosen: false,
      },
      // Pode adicionar quantas lojas quiser
    ]
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'update_cart': {
      return { ...state, cartButton: !state.cartButton };
    }
    case 'update_extrainfo': {
      const extraInfo = updateComponent(action.name, [...state.extraInfo]);
      return { ...state, extraInfo };
    }
    case 'next_info': {
      const extraInfo = nextExtraInfo([...state.extraInfo]);
      return { ...state, extraInfo };
    }
    case 'previous_info': {
      const extraInfo = previousExtraInfo([...state.extraInfo]);
      return { ...state, extraInfo };
    }
    case 'search_client': {
      // Evoluir lógica de search para Dropdown com lista atualizável
      const client = state.clients.find(client => client.name.toLowerCase().includes(action.name));
      if (client !== undefined) return { ...state, client };
      return { ...state, client: { name: action.name } };
    }
    case 'current_client': {
      return { ...state, client: action.client };
    }
    case 'update_stores': {
      const client = {
        ...state.client,
        stores: action.stores
      };
      return { ...state, client };
    }
    default:
      return state;
  }
};

const nextExtraInfo = (extraInfo) => {
  // Atualizando a próxima posição do array para true
  // Caso o ultimo icone esteja ativado, não devem ser feitas atualizações
  const last = extraInfo.length - 1;
  if (extraInfo[last].isChosen) {
    return extraInfo;
  }
  // Variável usada para checar quando atualizamos uma propriedade do vetor
  let updated = false;
  // Enquanto não encontrar o elemento true, não devemos atualizar
  let found = false;
  const newExtraInfo = extraInfo.map((curr, index) => {
    if (curr.isChosen) {
      curr = { ...curr, isChosen: false };
      found = true;
    // atualiza o primeiro caso nenhum objeto tenha sido atualizado
    // e esteja dentro do tamanho limite do extraInfo
    } else if (!updated && found && index <= extraInfo.length - 1) {
      curr = { ...curr, isChosen: true };
      updated = true;
    }
    return curr;
  });

  return newExtraInfo;
};

const previousExtraInfo = (extraInfo) => {
  // Atualizando o icone anterior para true
  // Caso o primeiro icone esteja ativado, não devem ser feitas atualizações
  if (extraInfo[0].isChosen) {
    return extraInfo;
  }

  const newExtraInfo = [...extraInfo];
  const size = newExtraInfo.length;
  let updated = false;
  let found = false;
  for (let i = size - 1; i >= 0; i -= 1) {
    if (newExtraInfo[i].isChosen) {
       newExtraInfo[i] = { ...newExtraInfo[i], isChosen: false };
       found = true;
    // Atualiza para ativado o icone anterior ao atual
    // caso já tenhamos encontrado o icone ativo
    } else if (!updated && found) {
      newExtraInfo[i] = { ...newExtraInfo[i], isChosen: true };
      updated = true;
    }
  }


  return newExtraInfo;
};

