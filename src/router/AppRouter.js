import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import MovieOverview from "../components/MovieOverview";
import WookieRoute from "../components/WookieRoute";
import history from "./history";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <WookieRoute path="/movies" exact component={MovieOverview} />
      <WookieRoute path="/movies/:id" exact component={MovieDetail} />
      <Route path="/" component={() => <Redirect to={"/movies"} />} />
    </Switch>
  </Router>
);

export default AppRouter;
