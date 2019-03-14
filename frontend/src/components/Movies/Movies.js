import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";

import ShowMovies from "./ShowMovies.js";
import MovieGenre from "./MovieGenre";
import OneMovie from "./OneMovie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: "",
      oneMovie: {},
      genres: [],
      foundMovie: "",
      filteredMovie: [],
      searched: false,
      comments: []
    };
  }
  componentDidMount() {
    this.getAllMovies();
  }

  getComments = id => {
    axios.get("/comments/" + id).then(response => {
      console.log(response);
      this.setState({
        comments: response.data.data
      });
    });
  };

  getAllMovies = () => {
    axios.get("/movies").then(response => {
      this.setState({
        movies: response.data.data
      });
    });
  };

  getOneMovie = id => {
    axios.get("/movies/" + id).then(response => {
      console.log(response);
      this.setState({
        oneMovie: response.data.data
      });
    });
  };

  getGenre = id => {
    axios.get("/genres/" + id + "/movies").then(response => {
      debugger;
      this.setState({
        genres: response.data.data
      });
    })
  };

  handleMovieChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const filteredMovie = this.state.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.state.title.toLowerCase())
    );
    this.setState({
      filteredMovie: filteredMovie,
      searched: true
    });
  }; //compares lowercase and if it includes characters in a string

  render() {
    const { movies } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/movies"
          render={props => (
            <ShowMovies
              {...props}
              movies={this.state.movies}
              handleMovieChange={this.handleMovieChange}
              title={this.state.title}
              handleSubmit={this.handleSubmit}
              filteredMovie={this.state.filteredMovie}
              searched={this.state.searched}
            />
          )}
        />
        <Route
          exact
          path="/movies/byGenre"
          render={props => (
            <MovieGenre
              {...props}
              genres={this.state.genres}
              getGenre={this.getGenre}
              movies={this.state.movies}
            />
          )}
        />

        <Route
          exact
          path="/movies/:id"
          render={props => (
            <OneMovie
              {...props}
              oneMovie={this.state.oneMovie}
              getOneMovie={this.getOneMovie}
              comments={this.state.comments}
              getComments={this.getComments}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(Movies);
