import constants from 'flux-constants';

const syncActionTypes = [
  'LOGOUT',
  'HANDLE_SIDEBAR'
];

const layoutActionTypes = [
  'SIDEBAR_OPEN',
  'SIDEBAR_MENU_OPEN',
  'SHOW_ALERT_DIALOG',
  'HIDE_ALERT_DIALOG',
  'CLOSE_SNACK_BAR',
  'OPEN_SNACK_BAR'
]

export const basicAsyncActionTypes = [
  'LOGIN',
  'LOGOUT',
  'REFRESH_TOKEN'
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionTypes)=>{
  return [
    ...result,
    actionTypes,
    `${actionTypes}_SUCCESS`,
    `${actionTypes}_ERROR`,
  ];
});

export default constants([
  ...syncActionTypes,
  ...asyncActionTypes,
  ...layoutActionTypes,
]);
