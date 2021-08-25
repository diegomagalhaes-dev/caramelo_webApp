import { BrowserRouter, Switch } from "react-router-dom";
import CollectPoints from "../Screens/Collect Points Page/CollectPoints";
import Landing from "../Screens/Landing Page/Landing";
import CreateFeeder from "../Screens/Create Feeder/CreateFeeder";
import SignIn from "../Screens/SignIn";
import Dashboard from "../Screens/Deshboard Validate";

import Route from "./Route";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={CollectPoints} />
        <Route path="/feeder/create" component={CreateFeeder} />
        <Route path="/login" component={SignIn} />
        <Route path="/admin" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
