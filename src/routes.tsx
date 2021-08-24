import { BrowserRouter, Switch, Route } from "react-router-dom";
import CollectPoints from "./Screens/Collect Points Page/CollectPoints";
import Landing from "./Screens/Landing Page/Landing";
import CreateFeeder from "./Screens/Create Feeder/CreateFeeder";
import SignIn from "./Screens/SignIn";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={CollectPoints} />
        <Route path="/feeder/create" component={CreateFeeder} />
        <Route path="/login"component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
