import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UserManager } from "oidc-client";

import { createMuiTheme, StylesProvider, ThemeProvider, useMediaQuery } from "@material-ui/core";

import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

import { createBrowserHistory } from "history";

import { AppInsightsInstrumentationKey, OidcSettings } from "./types";

import "./App.scss";
import { AppContext, AppContextProps } from "./AppContext";
import { AppRoutes } from "./AppRoutes";

const browserHistory = createBrowserHistory({ basename: "" });
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: AppInsightsInstrumentationKey,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    },
  },
});
appInsights.loadAppInsights();

export const App: React.FC = () => {
  const [userLoaded, setUserLoaded] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  const userManager = React.useMemo(() => new UserManager(OidcSettings), []);
  React.useEffect(() => {
    userManager.events.addUserLoaded((user) => {
      setUserLoaded(true);
      setUserId(user.profile.sub);
      setUserName(user.profile.name as string);
      setUserToken(user.access_token);
    });
    userManager.events.addSilentRenewError((error) => {
      console.log(error);
    });
    userManager.events.addAccessTokenExpired(() => {
      userManager.signinSilent().then((user) => {
        setUserLoaded(true);
        if (user) {
          setUserId(user.profile.sub);
          setUserName(user.profile.name as string);
          setUserToken(user.access_token);
        }
      });
    });
  }, [userManager]);

  // Get dark mode setting
  const cssDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  React.useEffect(() => {
    const storedDarkMode = localStorage.getItem("DarkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(cssDarkMode);
    }
  }, [cssDarkMode]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: ["Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
        },
      }),
    [darkMode]
  );

  const props = {
    userManager: userManager,
    userLoaded: userLoaded,
    userId: userId,
    userName: userName,
    userToken: userToken,
    darkMode: darkMode,
    setDarkMode: setDarkMode,
  } as AppContextProps;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={props}>
          <Router>
            <AppRoutes />
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};
