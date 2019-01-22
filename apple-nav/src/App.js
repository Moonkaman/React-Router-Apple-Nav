import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import appleData from "./Data";
import SubNavBar from "./components/SubNavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"],
      appleNavData: []
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
        <Route
          path="/:item"
          render={props => <SubNavBar {...props} appleNavData={appleData} />}
        />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
