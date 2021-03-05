import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import "../app/app.css";

const Track = ({ track }) => {
  const [spendedTime, setSpendedTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setSpendedTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <tr>
        <td>{track.title}</td>
        <td>
          <span>
            {(
              "0" +
              Math.floor(
                (spendedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              )
            ).slice(-2)}
            :
          </span>
          <span>
            {(
              "0" +
              Math.floor((spendedTime % (1000 * 60 * 60 * 24)) / (1000 * 60))
            ).slice(-2)}
            :
          </span>
          <span>
            {("0" + Math.floor((spendedTime % (1000 * 60)) / 1000)).slice(-2)}
          </span>
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
  );
};

export default Track;
