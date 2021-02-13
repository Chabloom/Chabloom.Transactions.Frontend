import * as React from "react";

import { UserManager } from "oidc-client";

import { OidcSettings } from "./types";

export interface AppContextProps {
  userManager: UserManager;
  userLoaded: boolean;
  userId: string;
  userName: string;
  userToken: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  userManager: new UserManager(OidcSettings),
  userLoaded: false,
  userId: "",
  userName: "",
  userToken: "",
  darkMode: false,
  setDarkMode: () => {},
});

export const useAppContext = () => React.useContext(AppContext);
