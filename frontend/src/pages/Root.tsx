import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Registr from "../components/Registr/Registr"
import App from "../composed-components/App/App";
import Login from "../components/Login/Login";

export default () => {
    return <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/registr" component={Registr} exact />
      <Route path="/login" component={Login}></Route>
    </Switch>
  </BrowserRouter>
}