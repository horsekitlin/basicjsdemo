import {connect} from 'react-redux';
import App from '../App';

const mapStateToProps = ({ setting }) => ({
  isFetching: setting.get('fetchCount') > 0,
  isInitial: true
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
