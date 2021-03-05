import React, { useState, useEffect } from "react";
import "../app/app.css";
import Track from "./../track";
import firebase from "../../util/firebase.js";

const Trackers = () => {
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    const trackRef = firebase.database().ref("Track");
    trackRef.on("value", (snapshot) => {
      const tracks = snapshot.val();
      const trackList = [];
      for (let id in tracks) {
        trackList.push({ id, ...tracks[id] });
      }
      setTrackList(trackList.reverse());
    });
  }, []);

  return (
    <div className="table-row">
      <table id="trackers">
        <tbody>
          {trackList.map((track, index) => (
            <Track track={track} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trackers;
