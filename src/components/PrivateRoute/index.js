import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomeScreen from '../../screens/HomeScreen';
import { logoutAction } from '../../actions/authActions';
import { openSnackBarAction } from '../../actions/navActions';
import ReduxStore from '../../store/configureStore';

const LOGOUT_TIME = 30 * 60 * 1000

export default ({ component: Component, ...rest }) => {
  const { auth } = ReduxStore.getState();

  const [initTokenRefreshed, setInitTokenRefreshed] = useState(false);


  let logoutTimeout;

  const logout = () => {
    const payload = { 
      message: '登录过期，请重新输入',
      level: 'error',
    };
    ReduxStore.dispatch(openSnackBarAction(payload));
    ReduxStore.dispatch(logoutAction());
  }

  useEffect(() => {
    if (initTokenRefreshed) return
    setInitTokenRefreshed(true);
  }, [auth, initTokenRefreshed]);


  // Idle timeout
  useEffect(() => {
    const events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress'
    ];

    const setLogoutTimeout = () => {
      logoutTimeout = setTimeout(logout, LOGOUT_TIME);
    }
    const resetTimeout = () => {
      if (logoutTimeout) clearTimeout(logoutTimeout);
      setLogoutTimeout()
    }

    events.forEach((event) => {
      window.addEventListener(event, resetTimeout);
    })
    setLogoutTimeout()

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimeout);
      })
      clearTimeout(logoutTimeout);
    }
  }, []);


  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.get('isAuth'))
          return <Redirect to={{ pathname: '/login' }} />;
        if (initTokenRefreshed)
          return <Component {...props} />
        return <HomeScreen isLoading {...props} />
      }}
    />
  );
};
