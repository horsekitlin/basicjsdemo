import isEmpty from 'lodash/isEmpty';
import { useReducer } from 'reinspect';
import * as types from '../constants/actionTypes';
import { openSnackBarAction } from '../actions/navActions';


class globalDispatcherClass {
  constructor() {
    this._dispatch = null;
  }

  getDispatch() {
    return this._dispatch;
  }

  setDispatch(dispatch) {
    this._dispatch = dispatch;
  }
}


export const globalDispatcher = new globalDispatcherClass();

const dispatchLogout = (code) => {
  const dispatch = globalDispatcher.getDispatch();
  dispatch(openSnackBarAction({
    level: 'info',
    message: `${code}: 登录过期，请重新输入`,
  }))
  dispatch({ type: 'LOGOUT' });
  return
}

export default (reducer, initialState) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    undefined,
    'react-skeleton-store'
  );

  const thunkDispatch = async action => {
    const {
      authorization,
      promise,
      promisePayload,
      types,
      successMessage,
      errorMessage,
      ...rest
    } = action;
    if (!promise) return dispatch(action);

    const [REQUEST, SUCCESS, ERROR] = types;
    dispatch({ ...rest, type: REQUEST });
    try {
      const payload = await promise(promisePayload);
      dispatch({ ...rest, payload, type: SUCCESS });
    } catch (error) {
      dispatch({ ...rest, error, type: ERROR });
      const { code, message: errorMessgae  } = error

      dispatch(openSnackBarAction({
        level: 'info',
        message: errorMessgae,
      }))
    }
  };

  return [state, thunkDispatch];
};

export const makeLocalReducer = (reducer, initialState, initFunction, id) => {
  const [state, dispatch] = useReducer(reducer, initialState, initFunction, id);

  const thunkDispatch = async action => {
    const {
      types,
      promise,
      authorization,
      promisePayload,
      ...rest
    } = action;

    if (!promise) return dispatch(action);

    const [REQUEST, SUCCESS, ERROR] = types;

    try {
      dispatch({ ...rest, type: REQUEST });

      const payload = await promise(authorization, promisePayload);
      dispatch({ ...rest, payload, promisePayload, type: SUCCESS });

      if (!isEmpty(successMessage)) {
        message.success(successMessage);
      }
    } catch (error) {
      dispatch({ ...rest, error, type: ERROR });
      if (typeof(error) === 'string') {
        message.error(error)
        return
      }

      const { code } = error
      if (INVALID_ACCESS_TOKEN_ERROR_CODE.includes(code)) {
        dispatchLogout(code)
        return
      }

      message.error(getErrorMessage(code))
      return

    }
  };

  return [state, thunkDispatch];
};
