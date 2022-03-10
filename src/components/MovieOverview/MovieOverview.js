import React, { useState } from "react";
import { useMappedState } from "redux-react-hook";
import _ from "lodash";
import { movieSelectors } from "../../store/reducers/movies";
import Appbar from "../Appbar/Appbar";
import Genre from "./Genre";
import "./MovieOverview.css";

const MovieOverview = () => {
  const [search, setSearch] = useState("");
  const moviesByGenre = useMappedState(movieSelectors.byGenre);
  return (
    <div className="MovieOverview">
      <Appbar search={search} onChange={({ target: { value } }) => setSearch(value)} />
      <div className="MovieOverview-content">
        {_.map(moviesByGenre, (value, key) => (
          <Genre key={key} title={key} movies={value} />
        ))}
      </div>
    </div>
  );
};

export default MovieOverview;
