import React, { useState } from "react";
import { useMappedState } from "redux-react-hook";
import { movieSelectors } from "../../store/reducers/movies";
import Appbar from "../Appbar/Appbar";

const MovieOverview = () => {
  const [search, setSearch] = useState("");
  const movieList = useMappedState(movieSelectors.list);
  return (
    <div className="MovieOverview">
      <Appbar search={search} onChange={({ target: { value } }) => setSearch(value)} />
    </div>
  );
};

export default MovieOverview;
