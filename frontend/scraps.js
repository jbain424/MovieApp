const getAllMovies = allMovies.map(movie => {
    return (
      <div>
        <Link to={"/movies/" + movie.id}>
          <img src={movie.img_url} alt="" />
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







import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import { NavBar } from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import OneMovie from "./components/OneMovie.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      oneMovie: []
    };
  }

  getAllMovies = () => {
    axios.get("/movies").then(response => {
      this.setState({
        allMovies: response.data.data
      });
    });
  };

  getOneMovie = (id) => {
    axios.get("/movies/" + id)
      .then(response => {
        this.setState({
          oneMovie: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllMovies();
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      allMovies: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route
            path="/movies"
            render={props => (
              <Movies {...props} allMovies={this.state.allMovies} />
            )}
          />
          <Route
            path="/movies/:id"
            render={props => (
              <OneMovie {...props} oneMovie={this.state.oneMovie} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
