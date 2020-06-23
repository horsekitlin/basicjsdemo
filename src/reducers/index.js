import { createContext } from 'react';
import { combineReducers } from 'redux';
import nav from './navReducer';
import auth from './authReducer';
import user from './userReducer';
import route from './routeReducer';
import setting from './settingReducer';
import snackbar from './snackbarReducer';
import initialState from './authReducer';

const reducer = combineReducers({
  nav,
  user,
  auth,
  route,
  setting,
  snackbar
});

export const ReducerContext = createContext(initialState);

export default reducer;
