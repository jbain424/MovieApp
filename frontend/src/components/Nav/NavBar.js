import React from "react";
import { Link } from "react-router-dom";

import "../../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftNav">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="rightNav">
        <Link to="/movies">All Movies</Link>
        <Link to="/byGenre">By Genre</Link>
      </div>
    </div>
  );
};
