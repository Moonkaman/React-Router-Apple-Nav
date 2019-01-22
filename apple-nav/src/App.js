import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navItems: ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"]
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar navItems={this.state.navItems} />
      </div>
    );
  }
}

export default App;
