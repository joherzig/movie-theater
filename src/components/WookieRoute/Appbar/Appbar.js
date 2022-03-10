import React from "react";
import "./Appbar.css";

const Appbar = ({ search, onChange }) => {
  return (
    <div className="Appbar">
      <div className="Appbar-title">
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
