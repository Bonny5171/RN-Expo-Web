export const acUpdateComponent = (type, name) => {
  return {
    type: 'update_' + type,
    name
  };
};

export const acUpdateCurrent = (name, newCurrent) => {
  return {
    type: 'update_current',
    name,
    newCurrent
  };
};

export const acUpdateList = () => {
  return {
    type: 'update_list'
  };
};

export const acFilterList = (data) => {
  return {
    type: 'filter_list',
    data
  };
};

export const acCurrentClient = (client) => {
  return {
    type: 'current_client',
    client
  };
};

export const acNextClient = () => {
  return {
    type: 'next_client'
  };
};

export const acPreviousClient = () => {
  return {
    type: 'previous_client'
  };
};

export const acSortList = (type, name) => {
  return {
    type: 'sort_list',
    name
  };
};

export const acSetClients = (clients) => {
  return {
    type: 'update_base',
    clients
  };
};