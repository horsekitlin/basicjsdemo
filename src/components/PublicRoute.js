import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ReducerContext } from '../reducers';

export default ({ component: Component, ...rest }) => {
  const [{ auth }] = useContext(ReducerContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.get('isAuth')) return <Component {...props} />;
        return <Redirect to={{ pathname: '/' }} />;
      }}
    />
  );
};
