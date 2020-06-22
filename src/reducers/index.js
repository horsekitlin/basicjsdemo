import { combineReducers } from 'redux';
import nav from './navReducer';
import auth from './authReducer';
import user from './userReducer';
import route from './routeReducer';
import setting from './settingReducer';
import snackbar from './snackbarReducer';

const appReducer = combineReducers({
  nav,
  user,
  auth,
  route,
  setting,
  snackbar
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
