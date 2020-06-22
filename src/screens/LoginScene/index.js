import LoginScene from './view';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/user';

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => {
    dispatch(loginAction(payload))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);
