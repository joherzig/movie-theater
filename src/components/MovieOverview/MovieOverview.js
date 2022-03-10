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
  const filterMovies = (movies) => {
    if (!search || !movies?.length) return movies;
    return movies.filter((movie) => movie.title.toUpperCase().includes(search.toUpperCase()));
  };
  return (
    <div className="MovieOverview">
      <Appbar search={search} onChange={({ target: { value } }) => setSearch(value)} />
      <div className="MovieOverview-content">
        {_.map(moviesByGenre, (value, key) => {
          const filteredMovies = filterMovies(value);
          if (!filteredMovies?.length) return null;
          return <Genre key={key} title={key} movies={filteredMovies} />;
        })}
      </div>
    </div>
  );
};

export default MovieOverview;
