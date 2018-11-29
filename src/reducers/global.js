const INITIAL_STATE = {
  context: 'Admin',
  catalogCover: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'update_context': {
      const context = action.payload;
      return { ...state, context };
    }
    case 'catalog_cover': {
      const catalogCover = !state.catalogCover;
      return { ...state, catalogCover };
    }
    default:
      return { ...state };
  }
};