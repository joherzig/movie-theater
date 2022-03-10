import React from "react";
import { useMappedState } from "redux-react-hook";
import _ from "lodash";
import { movieSelectors } from "../../store/reducers/movies";
import Genre from "./Genre";
import "./MovieOverview.css";

const MovieOverview = () => {
  const moviesByGenre = useMappedState(movieSelectors.byGenre);
  return (
    <div className="MovieOverview">
      <div className="MovieOverview-content">
        {_.map(moviesByGenre, (value, key) => {
          return <Genre key={key} title={key} movies={value} />;
        })}
      </div>
    </div>
  );
};

export default MovieOverview;
