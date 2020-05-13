import React, { Component } from "react";
import Board from "./Board";
import BoxList from "./BoxList";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Board /> */}
        <BoxList />
      </div>
    );
  }
}

export default App;
