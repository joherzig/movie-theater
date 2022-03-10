import React from "react";
import { Route } from "react-router-dom";
import Appbar from "./Appbar";

const WookieRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => {
      return (
        <div className="WookieRoute">
          <Appbar {...matchProps} />
          <Component {...matchProps} />
        </div>
      );
    }}
  />
);

export default WookieRoute;
