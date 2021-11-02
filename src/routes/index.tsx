import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
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
