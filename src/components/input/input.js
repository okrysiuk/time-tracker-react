import React, { useState } from "react";
import "../app/app.css";
import * as FaIcons from "react-icons/fa";
import firebase from "../../util/firebase.js";

const Input = () => {
  const [title, setTitle] = useState(`Track ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} `);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTrack = () => {
    const trackRef = firebase.database().ref("Track");
    console.log(title);
    const track = {
      title,
      fullTime: 0,
    };
    trackRef.push(track);
  };
  return (
    <div className="input-row">
      <input
        type="text"
        id="tracker-name"
        name="lastname"
        placeholder="Enter tracker name"
        onChange={handleOnChange}
      ></input>
      <button className="play-new" onClick={createTrack}>
        <FaIcons.FaPlay />
      </button>
    </div>
  );
};

export default Input;
