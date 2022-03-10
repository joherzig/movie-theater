import React from "react";
import "./Appbar.css";

const Appbar = ({ search, onChange, ...props }) => {
  return (
    <div className="Appbar">
      <div className="Appbar-title" onClick={() => (window.location = "/")}>
        <span>
          Wookie
          <br />
          Movies
        </span>
      </div>
      <div className="Appbar-searchWrapper">
        <div className="Appbar-inputWrapper">
          <input type="text" value={search} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
