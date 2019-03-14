import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MovieGenre extends React.Component {
  state = {
    genreSelect: "",
    formSubmitted: false
  };

  componentDidMount() {
    this.getGenre(this.props.match.params.id);
  }

  handleSelect = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formSubmitted: false
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    });
  };

  render() {
    const { genreSelect, formSubmitted } = this.state;
    const { movies, genres } = this.props;

    const movieFilter = movies;
    if (formSubmitted && genreSelect) {
      movieFilter = movies.filter(movie => {
        return movie.genres === genreSelect;
      });
    }
    const movieList = movieFilter.map(movie => {
      return <li key={movie.id}>{movie.title}</li>;
    });

    const genreList = genres.map((genre, i) => {
      return (
        <option key={i + 1} value={genre}>
          {genre}
        </option>
      );
    });
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <select name="genreSelect" onChange={this.handleSelect}>
            <option key="0" value="">
              {" "}
            </option>
            {genreList}
          </select>
          <button type="submit">Find Movies</button>
        </form>
        <ul></ul>
      </>
    );
  }
}

export default MovieGenre;
