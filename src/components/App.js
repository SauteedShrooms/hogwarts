import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Main from "./Main";


class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main data={this.state.hogs} />
      </div>
    );
  }
}

export default App;
