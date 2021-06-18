import * as React from "react";
import { UserManager } from "oidc-client";

export interface AppContextProps {
  userManager: UserManager;
  userLoaded: boolean;
  userId: string;
  userName: string;
  userEmail: string;
  userToken: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  userManager: new UserManager({}),
  userLoaded: false,
  userId: "",
  userName: "",
  userEmail: "",
  userToken: "",
  darkMode: false,
  setDarkMode: () => console.warn("setDarkMode not implemented"),
});

export const useAppContext = (): AppContextProps => React.useContext(AppContext);
