import React from "react";

const MovieDetail = ({ match }) => {
  return <div className="MovieDetail">Movie Detail for ID: {match.params.id}</div>;
};

export default MovieDetail;
