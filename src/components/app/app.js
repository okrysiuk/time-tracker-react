import { React, useState, useEffect } from "react";
import "./app.css";
import * as FaIcons from "react-icons/fa";
import Moment from "react-moment";
import "moment-timezone";

function App() {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  /*
  function toDate(seconds) {
    let paleozoy = new Date(1970, 0, 1); // Epoch
    paleozoy.setSeconds(seconds);
    return paleozoy;
  }
*/
  return (
    <div className="main-container">
      <div className="timer-container">
        <h2>tracker</h2>
        <Moment format="hh:mm:ss" interval={1000} />
        <div className="input-row">
          <input
            type="text"
            id="tracker-name"
            name="lastname"
            placeholder="Enter tracker name"
          ></input>
          <button className="play-new">
            <FaIcons.FaPlay />
          </button>
        </div>
        <div className="table-row">
          <table id="trackers">
            <tr>
              <td>No name tracker #1</td>
              <td>
                <span>
                  {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                  {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
              </td>
              <td>
                <button className="play" onClick={() => setTimerOn(true)}>
                  <FaIcons.FaPauseCircle />
                </button>
              </td>
              <td>
                <button className="delete">
                  <FaIcons.FaMinusCircle />
                </button>
              </td>
            </tr>
            <tr>
              <td>No name tracker #2</td>
              <td>00:00:02</td>
              <td>
                <button className="pause">
                  <FaIcons.FaPauseCircle />
                </button>
              </td>
              <td>
                <button className="delete">
                  <FaIcons.FaMinusCircle />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
