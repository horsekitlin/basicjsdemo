import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PublicRoute from "../../components/PublicRoute";
import ErrorPage from "../ErrorPageScreen";
import HomeScreen from "../HomeScreen";
import ErrorBoundary from "../../components/ErrorBoundary";
import LayoutWrapper from "../../components/LayoutWrapper";
import theme from "../../constants/theme";
import LoginScreen from '../LoginScreen';

const MainScreen = (props) => {
  const {
    nav,
    auth,
    snackbar,
    setWatchMenu,
    showAlertDialog,
    hideAlertDialog,
    handleLogout,
  } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <LayoutWrapper
            nav={nav}
            auth={auth}
            snackbar={snackbar}
            setWatchMenu={setWatchMenu}
            showAlertDialog={showAlertDialog}
            hideAlertDialog={hideAlertDialog}
            handleLogout={handleLogout}
          >
            <Switch>
              <PublicRoute
                exact
                path="/"
                component={HomeScreen}
              />
              <PublicRoute
                exact
                path="/login"
                component={LoginScreen}
              />
              <Route exact component={ErrorPage} />
            </Switch>
          </LayoutWrapper>
        </Router>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
};

export default MainScreen;
