import React from "react";

import Dashboar from "../pages/Dashboard";
import Repository from "../pages/Repository";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboar} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
