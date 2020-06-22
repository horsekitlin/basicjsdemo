import types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

export const authTokenMiddleware = store => next => action => {

  if(isEmpty(action.payload)) {
    return next(action);
  }

  if(action.payload.statusCode === 403) {
    return next({type: types.OPEN_SNACK_BAR, payload: {
      level: 'warning',
      message: "没有操作权限。"
    }});
  }

  if((action.payload.statusCode === 401) || (action.payload.statusCode === 511)) {
    return next({type: types.SHOW_ALERT_DIALOG, payload: {
      alertType: 'LOGOUT',
      level: 'info',
      alertMessage: "登入逾时，请重新登入。"
    }});
  }

  return next(action);
};