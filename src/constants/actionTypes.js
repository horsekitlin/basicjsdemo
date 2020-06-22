import constants from 'flux-constants';

const syncActions = [
  'LOGOUT',
  'HANDLE_SIDEBAR'
];

const layoutActions = [
  'SIDEBAR_OPEN',
  'SIDEBAR_MENU_OPEN',
  'SHOW_ALERT_DIALOG',
  'HIDE_ALERT_DIALOG',
  'CLOSE_SNACK_BAR',
  'OPEN_SNACK_BAR'
]

export const aSyncActions = [
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
];

export default constants([...syncActions, ...aSyncActions, ...layoutActions]);
