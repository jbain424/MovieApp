import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../css/Movies.css";

class ShowMovies extends Component {
  render() {
    const {
      movies,
      handleMovieChange,
      title,
      handleSubmit,
      filteredMovie,
      searched,

    } = this.props;


    const getMovies = movies.map((movie, i) => {
      return (
        <div>
          <Link to={"/movies/" + movie.id}>
            <img src={movie.img_url} alt="" key={i}/> {movie.title}
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className="topTitle">
        <h1>Top Black Movies of All Time</h1></div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            onChange={handleMovieChange}
            value={title}
            placeholder={"Search for Title"}
          />
        <button className="submitbutton" type="submit">Submit</button>
        </form>
        {searched ? (
          filteredMovie.length ? (
            "Found Movie"
          ) : (
             "Not Found"
          )
        ) : null}

        <div className="themovies">{getMovies}</div>
      </div>
    );
  }
}

export default ShowMovies;
