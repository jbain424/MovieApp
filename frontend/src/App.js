import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import Movies from "./components/Movies/Movies.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
        </Switch>
      </div>
    );
  }
}

export default App;
