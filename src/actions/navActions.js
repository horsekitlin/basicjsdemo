import types from '../constants/actionTypes';


export const switchSideBarAction = payload => ({
    type: types.SIDEBAR_OPEN,
    isAsync: false,
    payload
  });


export const switchMenuAction = payload => ({
    type: types.SIDEBAR_MENU_OPEN,
    isAsync: false,
    payload
  });

export const showAlertDialogAction = payload => ({
    type: types.SHOW_ALERT_DIALOG,
    payload,
  })

export const hideAlertDialogAction = payload => ({
    type: types.HIDE_ALERT_DIALOG,
    payload,
})

export const closeSnackBarAction = () => ({
  type: types.CLOSE_SNACK_BAR,
  isAsync: false,
});

export const openSnackBarAction = payload => ({
  type: types.OPEN_SNACK_BAR,
  isAsync: false,
  payload
});
