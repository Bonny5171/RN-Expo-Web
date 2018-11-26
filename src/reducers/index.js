import { combineReducers } from 'redux';
import auth from './auth';
import locale from './locale';
import global from './global';
import * as pages from './pages';

export default combineReducers({
  locale,
  auth,
  global,
  ...pages // Todos reducers de páginas
});
