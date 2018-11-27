export const acUpdateButtons = (menu, name) => {
  // O parâmetro menu deve conter o nome do menu atual (vendor, setup ou admin)
  // name é o nome do botão a ser atualizado
  return {
    type: 'update_' + menu,
    name
  };
};

export const acSubMenuCatalog = () => {
  return {
    type: 'submenu_catalog',
  };
};

export const acSubMenuIcon = (payload) => {
  // Payload = novo icone
  return {
    type: 'submenu_icon',
    payload
  };
};

export const acNavigate = (toPage) => {
  return {
    type: 'navigate',
    toPage
  };
};

export const acResetNavigation = (type) => {
  return {
    type: `reset_navigation_${type}`
  };
};

export const acResetSubMenu = () => {
  return {
    type: 'reset_submenu'
  };
};

