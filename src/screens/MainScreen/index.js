import {connect} from 'react-redux';
import MainScreen from './view';
import { switchMenuAction, hideAlertDialogAction, showAlertDialogAction } from '../../actions/navActions';
import { logoutAction } from '../../actions/authActions';

const mapStateToProps = ({ auth, nav, snackbar }) => ({
  isAuth: auth.get('isAuth'),
  auth,
  nav,
  snackbar
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: payload => {
    dispatch(logoutAction(payload));
  },
  setWatchMenu: payload => {
    dispatch(switchMenuAction(payload))
  },
  showAlertDialog: payload => {
    dispatch(showAlertDialogAction(payload))
  },
  hideAlertDialog: () => {
    dispatch(hideAlertDialogAction())
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
