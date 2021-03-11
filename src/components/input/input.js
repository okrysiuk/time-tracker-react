import React from "react";
import "../app/app.css";
import * as FaIcons from "react-icons/fa";
//import firebase from "../../util/firebase.js";
import { connect } from "react-redux";

import { changeTitle, addTrack } from "../../actions.js";

const Input = ({ onChangeTitle, addTrack, newTitle, trackList }) => {
  /*
  const [title, setTitle] = useState(
    `Track ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
  );
  
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  */
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTrack();
    }
  };
  /*
  const createTrack = () => {
    const trackRef = firebase.database().ref("Track");
    console.log(title);
    const track = {
      title,
      fullTime: 0,
      isActive: true,
    };
    trackRef.push(track);
  };
  */
  return (
    <div className="input-row">
      <input
        type="text"
        id="tracker-name"
        name="lastname"
        placeholder="Enter tracker name"
        onChange={onChangeTitle}
        onKeyDown={handleKeyDown}
      ></input>
      <button className="play-new" onClick={addTrack}>
        <FaIcons.FaPlay />
      </button>
    </div>
  );
};

const mapStateToProps = ({ newTitle, trackList }) => {
  return {
    newTitle,
    trackList,
  };
};

const mapDispatchToProps = {
  onChangeTitle: changeTitle,
  addTrack,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
