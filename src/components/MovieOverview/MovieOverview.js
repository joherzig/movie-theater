import React, { useEffect, useState } from "react";
import qs from "query-string";
import _ from "lodash";
import Genre from "./Genre";
import "./MovieOverview.css";
import movieApi from "../../middleware/movie";

const MovieOverview = ({ location }) => {
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    getMoviesByQuery();
  }, [location.search]);

  const getMoviesByQuery = async () => {
    const { search = "" } = qs.parse(location.search);
    const movies = await movieApi.getList(search);
    const reducedMovies = movies.reduce((byGenre, movie) => {
      movie.genres.forEach((el) => {
        if (!byGenre[el]?.length) {
          byGenre[el] = [movie];
          return null;
        }
        byGenre[el].push(movie);
      });
      return byGenre;
    }, {});
    setMoviesByGenre(reducedMovies);
  };

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
