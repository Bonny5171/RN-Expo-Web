import { SET_LOCALE } from '../actions/types';
import getTranslations from '../utils/locales/index';

// TODO intiate from user specifics (browser language or native language)
const initialState = {
  currentLocale: 'pt-BR',
  translations: getTranslations('pt-BR'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        currentLocale: action.currentLocale,
        translations: getTranslations(action.currentLocale),
      };
    default:
      return state;
  }
};
