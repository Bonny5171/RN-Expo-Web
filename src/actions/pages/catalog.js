export const acUpdateButtons = (name) => {
  return {
    type: 'update_buttons',
    name
  };
};

export const acClosePopUp = () => {
  return {
    type: 'close_popup'
  };
};

export const acCurrentDropDown = (payload) => {
  return {
    type: 'current_dropdown',
    payload
  };
};

export const acOpenCloseDropDown = () => {
  return {
    type: 'openClose_dropdown'
  };
};

export const acOpenCloseAssistant = () => {
  return {
    type: 'openClose_assistant'
  };
};

export const acSelectedCartDropDown = () => {
  return {
    type: 'assistant_dropdown'
  };
};


export const acSaveCart = (cart) => {
  return {
    type: 'save_cart',
    cart
  };
};

export const acOpenCart = (payload) => {
  return {
    type: 'open_cart',
    payload
  };
};

export const acDeleteCart = (name) => {
  return {
    type: 'delete_cart',
    name
  };
};

export const acAddCartProducts = (products) => {
  return {
    type: 'add_products',
    products
  };
};

export const acRemoveCartProduct = (name) => {
  return {
    type: 'remove_product',
    name
  };
};

export const acSelectProduct = (keyDestaque, keyProduct) => {
  return {
    type: 'select_product',
    keyDestaque,
    keyProduct
  };
};


// View Seleção para o carrinho
export const acAssistant = (product) => {
  return {
    type: 'assistant',
    product
  };
};

// Cores
export const acAssistantPopUp = (name) => {
  // Abre/Fecha popup
  return {
    type: 'assistant_popup',
    name
  };
};

export const acSelectColor = (name) => {
  // Escolhe a cor que será exibida
  return {
    type: 'select_color',
    name
  };
};

export const acRemoveColor = (name) => {
  // Remove a cor da lista de exibição
  return {
    type: 'remove_color',
    name
  };
};
export const acCurrentColor = (position) => {
  //  Define a cor atual
  return {
    type: 'current_color',
    position
  };
};

// Grades
export const acUpdateGradeQuantity = (payload) => {
  return {
    type: 'input_grade',
    payload
  };
};

export const acSelectedGrade = (name) => {
  return {
    type: 'selected_grade',
    name
  };
};

export const acColorsGrades = (colors) => {
  return {
    type: 'colors_grades',
    colors,
  };
};

export const acTextGrade = (name, grade, color, quantity) => {
  // Atualiza a entrada de texto que guarda a quantidade de grades/cor
  return {
    type: 'text_grade',
    name, // Nome(codigo) da cor
    grade, // Linha do input
    color, // Coluna do input
    quantity, // Valor
  };
};

export const acInsertGradesColor = (product, cart) => {
  return {
    type: 'insert_into_cart',
    product,
    cart
  };
};

export const acCurrentGrade = (grade) => {
  // Define a grade atual, passando o índice atual da lista
  return {
    type: 'current_grade',
    grade
  };
};

export const acSelectList = (payload) => {
  return {
    type: 'select_product_list',
    payload
  };
};


export const acAddStore = (stores) => {
  return {
    type: 'add_store',
    stores
  };
};

export const acSaveGradesStore = () => {
  return {
    type: 'save_colors_store',
  };
};

export const acCloneColorsStores = () => {
  // Aplica as mesmas grades de cores para todas as lojas
  return {
    type: 'clone_colors'
  };
};

export const acChangeTab = (name) => {
  return {
    type: 'change_tab',
    name
  };
};

export const acCurrentProduct = (product) => {
  return {
    type: 'current_product',
    product
  };
};

export const acColorsPopUp = () => {
  return {
    type: 'colors_popup'
  };
};

export const acChangeColor = (name) => {
  return {
    type: 'change_color',
    name
  };
};

export const acUpdateGallery = (itemKey) => {
  return {
    type: 'update_gallery',
    itemKey
  };
};

export const acResetColors = () => {
  return {
    type: 'reset_colors'
  };
};

export const acChangeGallery = (url) => {
  return {
    type: 'change_gallery',
    payload: url
  };
};

export const acToggleExpanded = (catalog) => {
  return {
    type: 'expanded_catalog',
    catalog
  };
};

export const acSelectedSummaryEmail = (payload) => {
  return {
    type: 'selected_summary_email',
    payload
  };
};

export const acStartingGrid = () => {
  return {
    type: 'starting_grid'
  };
};

export const acSelectOpt = (payload) => {
  return {
    type: 'select_opt',
    payload
  };
};

export const acBtnMais = (payload) => {
  return {
    type: 'update_btn_mais',
    payload
  };
};

export const acBtnEnvelop = (payload) => {
  return {
    type: 'update_btn_envelop',
    payload
  };
};

export const acCarrinho = (payload) => {
  return {
    type: 'update_btn_carrinho',
    payload
  };
};

export const acDefineCarrinhoSelecionado = (payload) => {
  return {
    type: 'set_car_selected',
    payload
  };
};

