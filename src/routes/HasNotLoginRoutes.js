import React from 'react';
import { Route, Switch } from 'react-router'
import LoginContainer from '../containers/LoginContainer';
import GlobalErrorPageScene from '../screens/GlobalErrorPageScreen/index';

const HasNotLoginRoutes = () =>
  <Switch>
    <Route path='/' component={LoginContainer} />
    <Route path='/login' component={LoginContainer} />
    <Route component={GlobalErrorPageScene}/>
  </Switch>

export default HasNotLoginRoutes;
