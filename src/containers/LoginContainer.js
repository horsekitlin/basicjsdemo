import LoginScene from '../screens/LoginScene';
import { handleLogin } from '../actions/user';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => dispatch(handleLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
