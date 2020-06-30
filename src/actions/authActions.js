import types from "../constants/actionTypes";

export const loginAction = payload => ({
  type: types.LOGIN,
  payload
});

export const logoutAction = payload => ({
  type: types.LOGOUT,
  payload
});

export const refreshTokenAction = () => ({
  type: types.REFRESH_TOKEN,
});
