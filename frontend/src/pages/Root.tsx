import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"
import App from "../composed-components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";

export default () => {
    return <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/registr" component={RegistrationPage} exact />
      <Route path="/login" component={LoginPage}/>
    </Switch>
  </BrowserRouter>
}