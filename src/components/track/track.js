import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import "../app/app.css";
import firebase from "../../util/firebase.js";

const Track = ({ track }) => {
  const [spendedTime, setSpendedTime] = useState(track.fullTime);
  /*const [timerOn, setTimerOn] = useState(true);*/

  const deleteTrack = () => {
    const trackRef = firebase.database().ref("Track").child(track.id);
    trackRef.remove();
  };

  const updateTrack = () => {
    const trackRef = firebase.database().ref("Track").child(track.id);
    trackRef.update({
      fullTime: spendedTime,
      isActive: !track.isActive,
    });
  };

  const playPause = () => {
    /*setTimerOn(!timerOn);*/
    updateTrack();
  };
  
  useEffect(() => {
    let interval = null;
    if (track.isActive) {
      interval = setInterval(() => {
        setSpendedTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!track.isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [track.isActive]);
  return (
    <tr className={track.isActive ? 'active' : ''}>
      <td>{track.title}</td>
      <td>
        <span>
          {(
            "0" +
            Math.floor((spendedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
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
        <button className={track.isActive ? 'pause' : 'play'} onClick={playPause}>
          {track.isActive ? <FaIcons.FaPauseCircle /> : <FaIcons.FaPlayCircle />}
        </button>
      </td>
      <td>
        <button className="delete" onClick={deleteTrack}>
          <FaIcons.FaMinusCircle />
        </button>
      </td>
    </tr>
  );
};

export default Track;
