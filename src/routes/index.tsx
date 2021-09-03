import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/home";
import Info from "../screens/info";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info/:id+" component={Info} />
    </Switch>
  );
};

export default Routes;
