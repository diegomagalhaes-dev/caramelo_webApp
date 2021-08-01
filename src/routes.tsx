import { BrowserRouter, Switch, Route } from "react-router-dom";
import CollectPoints from "./Screens/Collect Points Page/CollectPoints";
import Landing from "./Screens/Landing Page/Landing";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={CollectPoints} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
