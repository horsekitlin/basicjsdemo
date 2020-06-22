import React from 'react'
import propTypes from 'prop-types';
import Routes from './routes';
import { HashRouter as Router } from "react-router-dom";
import LayoutWrapper from './containers/LayoutWrapperContainer';

const HasLoginApp = (props) =>
  <Router>
    <LayoutWrapper>
      <Routes.HasLoginRoutes {...props} />
    </LayoutWrapper>
  </Router>;

const HasNotLoginApp = () =>
  <Router>
    <Routes.HasNotLoginRoutes />
  </Router>

const Main = (props) => 
  props.isAuth
      ? <HasLoginApp />
      : <HasNotLoginApp />;
  
Main.propTypes = {
  isAuth: propTypes.bool.isRequired,
  handleGetPermission: propTypes.func.isRequired,
  token: propTypes.string,
};

Main.defaultProps = {
  token: "",
};

export default Main;