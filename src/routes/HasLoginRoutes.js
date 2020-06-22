import React from 'react';
import { Route, Switch } from 'react-router'
import routerConfig from '../constants/router.config';

const RenderRouters = routes => {
  return routes.reduce(routerReducer, []);
}

const routerReducer = (preRoutes, currentRoute) => {
  const { path, displayMenu, component, children = [] } = currentRoute;

  if(!displayMenu) return preRoutes;

  const addedRoute = children.length > 0
    ? RenderRouters(children)
    : [<Route exact key={path} path={path} component={component} />]

  return [ ...preRoutes, ...addedRoute ]
}

class HasLoginRoutes extends React.Component {
  
  render() {
    return (
      <Switch>
        {RenderRouters(routerConfig)}
      </Switch>
    );
  }
}

export default HasLoginRoutes;
