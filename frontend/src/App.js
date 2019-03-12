import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import { NavBar } from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import Movies from "./components/Movies.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: []
    };
  }
  componentDidMount() {
    axios.get("/movies").then(response => {
      this.setState({
        allMovies: response.data.data
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
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
        </Switch>
      </div>
    );
  }
}

export default App;
