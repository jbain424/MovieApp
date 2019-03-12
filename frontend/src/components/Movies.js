import React from "react";
import { Link } from "react-router-dom";

import "../css/Movies.css";

const Movies = props => {
  const { allMovies } = props;
  const getAllMovies = allMovies.map(movie => {
    return (
      <div className="allmovies">
        <Link to={"/movies" + movie.id}>
          <img src={movie.img_url} />
          {movie.title}
        </Link>
      </div>
    );
  });
  return (
    <div className="movieDisplay">
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          id="text"
          name="text"
          type="text"
          placeholder="Search by Title"
          value={props.allMovies}
        />
        <input type="Submit" value="Search" />
      </form>
      <div className="themovies">{getAllMovies}</div>
    </div>
  );
};
export default Movies;
