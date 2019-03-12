import React from "react";
import { Link } from "react-router-dom";

import "../css/Movies.css";

const Movies = props => {
  const { allMovies } = props;
  const getAllMovies = allMovies.map(movie => {
    return (
      <div>
        <Link to={"/movies" + movie.id}>
          <img src={movie.img_url} />
          <br/>
          {movie.title}
        </Link>
      </div>
    );
  });
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="form">
        <input
          onChange={props.handleChange}
          id="text"
          name="text"
          type="text"
          placeholder="Search by Title"
          value=""
        />
        <input type="Submit" value="Search" />
      </form>
      <div className="themovies">{getAllMovies}</div>
    </div>
  );
};
export default Movies;
