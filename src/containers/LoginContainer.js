import LoginScene from '../screens/LoginScene';
import { loginAction } from '../actions/user';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => dispatch(loginAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
