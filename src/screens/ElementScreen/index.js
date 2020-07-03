import ElementScreen from './view';
import { connect } from 'react-redux';

const mapStateToProps = ({ user, route }) => ({
  user,
  route
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementScreen);
