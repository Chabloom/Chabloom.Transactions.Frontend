import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SignInCallback, SignOutCallback } from "./components";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/signin-oidc">
          <SignInCallback />
        </Route>
        <Route exact={true} path="/signout-oidc">
          <SignOutCallback />
        </Route>
      </Switch>
    </Router>
  );
};
