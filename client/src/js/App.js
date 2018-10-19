import React, { Component } from "react";
import "./App.css";
import MealPairs from "./containers/MealPairs"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MealPairs />
      </div>
    );
  }
}

export default App;
