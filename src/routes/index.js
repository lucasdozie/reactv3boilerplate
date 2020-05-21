import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import Dashboard from "../pages/dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}

