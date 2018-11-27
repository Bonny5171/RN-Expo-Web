export const acNextStep = () => {
  return {
    type: 'next_step_assistant',
  };
};

export const acCheckBox = (position) => {
  return {
    type: 'checkbox',
    position
  };
};

export const acFilterBranches = (position) => {
  return {
    type: 'filter_branches',
    position
  };
};

export const acOnlyHQ = (stores) => {
  return {
    type: 'only_headequarter',
    stores
  };
};


export const acOnlyBranches = (stores) => {
  return {
    type: 'only_branches',
    stores
  };
};

export const acLoadStores = (stores) => {
  return {
    type: 'load_stores',
    stores
  };
};

export const acChooseStore = (position, stores) => {
  return {
    type: 'choose_store',
    position,
    stores
  };
};

export const acResetAssistant = () => {
  return {
    type: 'reset_page'
  };
};

export const acToggleDropdown = () => {
  return {
    type: 'toggle_dropdown'
  };
};