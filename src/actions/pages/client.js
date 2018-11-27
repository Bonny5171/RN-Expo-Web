export const acCartButton = (type) => {
  return { type: 'update_' + type };
};

export const acNextInfo = () => {
  return { type: 'next_info' };
};

export const acPreviousInfo = () => {
  return { type: 'previous_info' };
};

export const acSearchClient = (name) => {
  return {
    type: 'search_client',
    name
  };
};

export const acChooseStore = (position, stores) => {
  return {
    type: 'choose_store',
    position,
    stores
  };
};

export const acCurrentClient = (client) => {
  return {
    type: 'current_client',
    client
  };
};

export const acUpdateStores = (stores) => {
  return {
    type: 'update_stores',
    stores
  };
};