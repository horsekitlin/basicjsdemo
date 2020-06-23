import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import PrivateRoute from '../../components/PrivateRoute';
import PublicRoute from '../../components/PublicRoute';
import ErrorPage from '../ErrorPageScreen';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import ErrorBoundary from '../../components/ErrorBoundary';
import { AppColors } from '../../constants/colors.config';
// import GlobalArea from '../GlobalArea';
// import reduxStore from '../../store/configureStore';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Avenir",
      '"Chinese Quote"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"PingFang SC"',
      '"Hiragino Sans GB"',
      '"Microsoft YaHei"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    useNextVariants: true,
    fontSize: 10,
    htmlFontSize: 12
  },
  palette: AppColors,
  shape: {
    borderRadius: 2
  },
  oshadows: [
    "none",
    "0px 1px 4px rgba(0, 0, 0, 0.12)",
    "0px 1px 3px rgba(0, 0, 0, 0.03), 0px 2px 8px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.05), 0px 3px 12px rgba(0, 0, 0, 0.15)",
    "0px 2px 6px rgba(0, 0, 0, 0.1), 0px 4px 15px rgba(0, 0, 0, 0.2)",
    "0px 1px 3px rgba(0, 0, 0, 0.03), 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 6px 17px rgba(0, 0, 0, 0.2)",
    "0px 2px 4px rgba(0, 0, 0, 0.05), 0px 3px 12px rgba(0, 0, 0, 0.15), 0px 8px 20px rgba(0, 0, 0, 0.2)",
    "0px 2px 6px rgba(0, 0, 0, 0.1), 0px 4px 15px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.2)"
  ]
});

const MainScreen = (props) => {
  const [, setInitApp] = useState(false);

  useEffect(() => {
    setInitApp(true);
  }, [setInitApp]);

  return (
    <MuiThemeProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <Switch>
            <PublicRoute exact path='/login' component={LoginScreen} />
            <PrivateRoute exact path='/' component={HomeScreen} />
            {/* <PrivateRoute
              exact
              path='/home'
              component={HomeScreen}
            /> */}
            <Route exact component={ErrorPage} />
          </Switch>
        </Router>
        {/* <GlobalArea /> */}
      </ErrorBoundary>
    </MuiThemeProvider>
  );
}

export default MainScreen;