import React from "react";
import "./Genre.css";

const Genre = ({ title, movies }) => {
  return (
    <div className="Genre">
      <div className="Genre-title">
        <h2>{title}</h2>
      </div>
      <div className="Genre-wrapper">
        {movies.map((movie) => (
          <div key={movie.id} className="Genre-movie">
            <img className="Genre-backdrop" src={movie.backdrop} />
            <div className="Genre-overlay">
              <a href={`/movies/${movie.id}`}>
                <div className="Genre-movie-title">{movie.title}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
