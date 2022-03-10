import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import { movieSelectors } from "../../store/reducers/movies";
import "./MovieDetail.css";

const MovieDetail = ({ match }) => {
  const mapState = useCallback((state) => ({
    details: movieSelectors.movie(state, match.params.id),
  }));
  const { details } = useMappedState(mapState);

  const year = new Date(details.released_on).getFullYear();
  return (
    <div className="MovieDetail">
      <div className="MovieDetail-wrapper">
        <div className="MoveDetail-poster-wrapper">
          <img className="MovieDetail-poster" src={details.poster} />
        </div>
        <div className="MovieDetail-info-wrapper">
          <div className="MovieDetail-info-title-wrapper">
            <text className="MovieDetails-info-title">{details.title}</text>
            <text className="MovieDetails-info-rating">{details.imdb_rating}/10</text>
          </div>
          <div className="MovieDetail-info-statistic">
            <p>{`${year} | ${details.length} | ${details.director}`}</p>
            <p>cast: {details.cast.join(", ")}</p>
          </div>
          <div className="MovieDetail-description">
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
