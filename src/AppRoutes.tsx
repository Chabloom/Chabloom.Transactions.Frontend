import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SignInCallback, SignOutCallback } from "./components";
import { useAppContext } from "./AppContext";

export const AppRoutes: React.FC = () => {
  const { userManager } = useAppContext();

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/signin-oidc">
          <SignInCallback userManager={userManager} />
        </Route>
        <Route exact={true} path="/signout-oidc">
          <SignOutCallback userManager={userManager} />
        </Route>
      </Switch>
    </Router>
  );
};
