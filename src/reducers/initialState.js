import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const userState = fromJS({
  login: {
    ok: true
  }
});

export const authState = fromJS({
  isAuth: true,
  info: {
    employeeName: 'administrator',
    roleName: 'admin',
  },
  permissions: {
    elements: {
      read: true,
      add: true,
      update: true,
      delete: true,
    },
    settings: {
      read: true,
      add: false,
      update: false,
      delete: false,
    },
    accounts: {
      read: true,
      add: false,
      update: false,
      delete: false,
    },
    roles: {
      read: true,
      add: false,
      update: false,
      delete: false,
    },
  },
  isInitial: false,
  loginErrorMsg: ''
});

export const settingState = fromJS({
  fetchCount: 0
});

export const snackbarState = fromJS({
  open: false,
  message: '',
  type: 'info'
});

export const navState = fromJS({
  isSideBarOpened: false,
  isAlertDialogOpen: false,
  alertMessage: '',
  level: 'info',
  watchedMenu: '',
  alertType: ''
});

export const routeState = {
  history
};
