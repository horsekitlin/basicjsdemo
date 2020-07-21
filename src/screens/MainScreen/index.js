import {connect} from 'react-redux';
import MainScreen from './view';
import { switchMenuAction, hideAlertDialogAction } from '../../actions/navActions';

const mapStateToProps = ({ auth, nav, snackbar }) => ({
  isAuth: auth.get('isAuth'),
  auth,
  nav,
  snackbar
});

const mapDispatchToProps = (dispatch) => ({
  setWatchMenu: payload => {
    dispatch(switchMenuAction(payload))
  },
  hideAlertDialog: () => {
    dispatch(hideAlertDialogAction())
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
