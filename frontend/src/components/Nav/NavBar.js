import React from "react";
import { Link } from "react-router-dom";

import "../../css/NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <div className="leftNav">
        <li><Link to={"/"}>Home</Link></li>
        </div>

      <div className="rightNav">
        <li><Link to="/movies">All Movies</Link></li>
        <li><Link to="/byGenre">By Genre</Link></li>
      </div>
    </ul>
  );
};
