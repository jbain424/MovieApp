import React from "react";
import { Link } from "react-router-dom";

import "../../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link> {"•"} <Link to="/movies">All Movies</Link>{" "}
        {"•"} <Link to="/movies/byGenre">By Genre</Link>
      </div>
    </div>
  );
};
