import React, { useState } from "react";
import { useDispatch } from "redux-react-hook";
import qs from "query-string";
import _ from "lodash";
import "./Appbar.css";
import { fetchMovieList } from "../../../store/reducers/movies";

const Appbar = ({ location, history, ...props }) => {
  const query = qs.parse(location.search) || {};
  const [search, setSearch] = useState(query.search || "");

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
    updateMovieList(value);
  };

  const updateMovieList = _.debounce((search) => {
    dispatch(fetchMovieList(search));
    if (!location.pathname.match(/^\/movies$/)) {
      history.push(`/movies?${qs.stringify({ search })}`);
      return null;
    }
    history.replace(`/movies?${qs.stringify({ search })}`);
  }, 500);

  return (
    <div className="Appbar">
      <div className="Appbar-title" onClick={() => history.push("/")}>
        <span>
          Wookie
          <br />
          Movies
        </span>
      </div>
      <div className="Appbar-searchWrapper">
        <div className="Appbar-inputWrapper">
          <input type="text" value={search} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
