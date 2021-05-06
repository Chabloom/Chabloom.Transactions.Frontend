import React from "react";
import { UserManager } from "oidc-client";
import { createMuiTheme, StylesProvider, ThemeProvider, useMediaQuery } from "@material-ui/core";

import { AppContextBase, AppContextPropsBase } from "./common";
import { OidcConfiguration } from "./config";

import { AppRoutes } from "./AppRoutes";

import "./App.scss";

export const App: React.FC = () => {
  const [userLoaded, setUserLoaded] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  const userManager = React.useMemo(() => new UserManager(OidcConfiguration), []);
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
  } as AppContextPropsBase;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppContextBase.Provider value={props}>
          <AppRoutes />
        </AppContextBase.Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};
