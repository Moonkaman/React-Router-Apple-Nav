import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import appleData from "./Data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"],
      appleNavData: null
    };
  }

  componentDidMount() {
    this.setState({
      appleNavData: appleData
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar navItems={this.state.navItems} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
