import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Countdown until December 25th, 2017</div>
        <div>
          <div>14 Days</div>
          <div>30 Hours</div>
          <div>15 Mins</div>
          <div>30 Secs</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
