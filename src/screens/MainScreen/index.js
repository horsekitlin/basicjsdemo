import {connect} from 'react-redux';
import MainScreen from './view';

const mapStateToProps = ({ auth, nav, snackbar }) => ({
  isAuth: auth.get('isAuth'),
  auth,
  nav,
  snackbar,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
