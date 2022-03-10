import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import MovieOverview from "../components/MovieOverview/MovieOverview";
import history from "./history";

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/movies" exact component={MovieOverview} />
      <Route path="/movies/:id" exact component={MovieDetail} />
      <Route path="/" component={() => <Redirect to={"/movies"} />} />
    </Switch>
  </Router>
);

export default AppRouter;
