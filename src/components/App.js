import React, { useEffect, useState } from "react";
import { useDispatch } from "redux-react-hook";
import qs from "query-string";
import AppRouter from "../router";
import { fetchMovieList } from "../store/reducers/movies";
import "./App.css";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await dispatch(fetchMovieList());
    setLoaded(true);
  };
  return <div className="App">{loaded ? <AppRouter /> : <span>Loading...</span>}</div>;
};

export default App;
