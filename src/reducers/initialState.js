import { fromJS } from 'immutable';

export const authState = fromJS({
  isAuth: false,
  info: {
    employeeName: '',
    roleName: '',
  },
  permissions: {
    elements: {
      read: false,
      add: false,
      update: false,
      delete: false,
    },
    settings: {
      read: false,
      add: false,
      update: false,
      delete: false,
    },
    accounts: {
      read: false,
      add: false,
      update: false,
      delete: false,
    },
    roles: {
      read: false,
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
