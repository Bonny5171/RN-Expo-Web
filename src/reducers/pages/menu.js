const INITIAL_STATE = {
  // Monitora botões do menu de vendedor (Ativo ou não)
  vendor: [
    {
      name: 'catalog',
      isChosen: true,
    },
    {
      name: 'orders',
      isChosen: false
    },
    {
      name: 'campaigns',
      isChosen: false
    },
    {
      name: 'client',
      isChosen: false
    },
  ],

  // Botões da área administrativa
  admin: [
    {
      name: 'dashboard',
      isChosen: false,
    },
    {
      name: 'assistant',
      isChosen: true
    },
    {
      name: 'price',
      isChosen: false
    },
    {
      name: 'orders',
      isChosen: false
    },
    {
      name: 'campaigns',
      isChosen: false
    },
    {
      name: 'clients',
      isChosen: false
    },
  ],

  subMenuCatalog: false,
  subMenuIcon: '3',
  // Items do submenu do catalogo
  catalogMenuItems: [
    {
      key: 0, icon: '3', txt: 'CATÁLOGO SETORIZADO', params: 'catalog'
    },
    {
      key: 1, icon: 'X', txt: 'CATÁLOGO EXPANDIDO', params: 'catalog'
    },
    {
      key: 2, icon: 'I', txt: 'LISTAGEM', params: 'listCatalog'
    }
  ],

  toPage: '/',

  // A flag redirect controla se a pagina deve redirecionar
  // Para adicionar uma rota nova coloque no final do vetor
  redirects: [
    {
      name: '/catalog',
      redirect: false,
    },
    {
      name: '/orders',
      redirect: false,
    },
    {
      name: '/campaigns',
      redirect: false,
    },
    {
      name: '/client',
      redirect: false,
    },
    {
      name: '/listCatalog',
      redirect: false,
    },
    { // Posição 5
      name: '/clients',
      redirect: false
    },
    // Área ADM
    {
      name: '/dashboard',
      redirect: false,
    },
    {
      name: '/assistant',
      redirect: false
    },
    { // Posição 8
      name: '/price',
      redirect: false
    },
    {
      name: '/orders',
      redirect: false
    },
    {
      name: '/', // Setup
      redirect: false,
    },
  ]
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'navigate': {
      const newState = [...state];

      newState.redirects = updateRedirects(action.toPage, state.redirects);
      newState.toPage = '/' + action.toPage;

      return { ...state, ...newState };
    }
    case 'update_vendor': {
      const newState = [...state];

      newState.vendor = updateButtons(action.name, [...state.vendor]);
      newState.redirects = updateRedirects(action.name, state.redirects);
      newState.toPage = '/' + action.name;

      return { ...state, ...newState };
    }
    case 'update_admin': {
      const newState = { ...state };

      newState.admin = updateButtons(action.name, [...state.admin]);
      newState.redirects = updateRedirects(action.name, state.redirects);
      newState.toPage = '/' + action.name;

      return { ...state, ...newState };
    }
    case 'submenu_catalog': {
      const subMenuCatalog = !state.subMenuCatalog;
      return { ...state, subMenuCatalog };
    }
    case 'submenu_icon': {
      const subMenuIcon = action.payload;
      return { ...state, subMenuIcon };
    }
    case 'reset_submenu': {
      const { subMenuIcon } = INITIAL_STATE;
      return { ...state, subMenuIcon };
    }
    case 'reset_navigation_vendor': {
      return { ...state, vendor: [...INITIAL_STATE.vendor] };
    }
    case 'reset_navigation_admin': {
      return { ...state, admin: [...INITIAL_STATE.admin] };
    }
    default:
      return { ...state };
  }
};

const updateButtons = (name, buttons) => {
  const updatedButtons = buttons.map(button => {
    // Mantém o botao ativo, caso ele seja clicado
    if (button.isChosen && name === button.name) {
      return button;
    }
    if (button.isChosen) {
      return { ...button, isChosen: false };
    } else if (button.name === name) {
      return { ...button, isChosen: true };
    }
    return button;
  });

  return updatedButtons;
};

const updateRedirects = (name, redirects) => {
  const updatedRedirects = redirects.map(page => {
    if (page.name !== '/' + name && !page.redirect) {
      page.redirect = true;
    } else {
      // Desativa outros redirects para evitar cair numa pagina e ser redirecionado automaticamente
      page.redirect = false;
    }
    return page;
  });

  return updatedRedirects;
};

const resetVendor = (vendor) => {
  const newVendor = vendor.map((curr, index) => {
    if (index === 0) {
      curr.isChosen = true;
    } else {
      curr.isChosen = false;
    }
    return curr;
  });
  return newVendor;
};