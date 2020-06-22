import {connect} from 'react-redux';
import Main from '../Main';

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.get('isAuth')
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);
