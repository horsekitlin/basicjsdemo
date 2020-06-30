import LayoutWrapper from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { refreshTokenAction } from '../../actions/authActions';
import {
  switchSideBarAction,
  switchMenuAction,
  showAlertDialogAction,
  hideAlertDialogAction,
  closeSnackBarAction,
  openSnackBarAction,
} from '../../actions/navActions';

const mapStateToProps = ({ auth,nav, snackbar }) => ({
  token: auth.getIn(['info','token']),
  alertType: nav.get('alertType'),
  isSideBarOpened: nav.get('isSideBarOpened'),
  alertMessage: nav.get('alertMessage'),
  level: nav.get('level'),
  isAlertDialogOpen: nav.get('isAlertDialogOpen'),
  employeeName: auth.getIn(['info','employeeName']),
  roleName: auth.getIn(['info','roleName']),
  open: snackbar.get('open'),
  message: snackbar.get('message'),
  level: snackbar.get('level'),
});

const mapDispatchToProps = (dispatch) => ({
  handleRefreshToken: () => {
    dispatch(refreshTokenAction());
  },
  sideBarSwitch: (payload) => {
    dispatch(switchSideBarAction(payload))
  },
  setWatchMenu: (payload) => {
    dispatch(switchMenuAction(payload))
  },
  closeSnackBar: () => {
    dispatch(closeSnackBarAction())
  },
  showAlertDialog: (payload) => {
    dispatch(showAlertDialogAction(payload))
  },
  hideAlertDialog: () => {
    dispatch(hideAlertDialogAction())
  },
  handleOpenSnackBar: (payload) => {
    dispatch(openSnackBarAction(payload));
  },
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LayoutWrapper));

