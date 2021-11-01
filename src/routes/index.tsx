import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <p>home</p>
      </Route>
      <Route path="/dashboard">
        <p>dashboard</p>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default Routes;
