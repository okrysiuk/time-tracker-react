import React from "react";
import * as FaIcons from "react-icons/fa";
import "../app/app.css";
//import firebase from "../../util/firebase.js";
import { connect } from "react-redux";
import Timer from "./../timer";
import { setActivity } from "../../actions.js";

const Track = ({ track, idx, setActivity, trackList }) => {
  /*
  const deleteTrack = () => {
    const trackRef = firebase.database().ref("Track").child(track.id);
    trackRef.remove();
  };

  const updateTrack = () => {
    const trackRef = firebase.database().ref("Track").child(track.id);
    trackRef.update({
      fullTime: sessionTime,
      isActive: !track.isActive,
    });
  };
  */
  /*
  useEffect(() => {
    let interval = null;
    if (track.isActive) {
      interval = setInterval(() => {
        sessionTimeInc(idx);
      }, 1000);
    } else if (!track.isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [track.isActive, idx, sessionTimeInc]);
  */
  return (
    <tr className={trackList[idx].isActive ? "active" : ""}>
      <td>{track.title}</td>
      <td>
        <Timer trackList={trackList} idx={idx} />
      </td>
      <td>
        <button
          className={trackList[idx].isActive ? "pause" : "play"}
          onClick={() => setActivity(idx)}
        >
          {trackList[idx].isActive ? (
            <FaIcons.FaPauseCircle />
          ) : (
            <FaIcons.FaPlayCircle />
          )}
        </button>
      </td>
      <td>
        <button className="delete" onClick={() => console.log("Delete")}>
          <FaIcons.FaMinusCircle />
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = ({ trackList }) => {
  return {
    trackList,
  };
};

const mapDispatchToProps = {
  setActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
