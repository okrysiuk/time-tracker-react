import React from "react";
import "./app.css";
import Trackers from "../trackers";
import Input from "../input";

import Moment from "react-moment";
import "moment-timezone";

function App() {
  return (
    <div className="main-container">
      <div className="timer-container">
        <h2>tracker</h2>
        <strong>Time in Kiev</strong>
        <Moment format="hh:mm:ss" interval={1000} />
        <Input />
        <Trackers />
      </div>
    </div>
  );
}

export default App;
