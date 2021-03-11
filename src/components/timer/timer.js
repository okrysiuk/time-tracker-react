import React, { useEffect, useState } from "react";
//import track from "../track/track";
import { connect } from "react-redux";
import { setFullTime } from "../../actions.js";

const Timer = ({ trackList, idx, setFullTime }) => {
  const [timer, setTimer] = useState(trackList[idx].fullTime);

  useEffect(() => {
    let interval = null;
    if (trackList[idx].isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1000);
        setFullTime(idx);
      }, 1000);
    } else if (!trackList[idx].isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trackList, idx, setFullTime]);

  return (
    <>
      <span>
        {(
          "0" + Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).slice(-2)}
        :
      </span>
      <span>
        {(
          "0" + Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60))
        ).slice(-2)}
        :
      </span>
      <span>{("0" + Math.floor((timer % (1000 * 60)) / 1000)).slice(-2)}</span>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  setFullTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
