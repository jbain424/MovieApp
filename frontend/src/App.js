import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {NavBar} from './components/Nav/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
