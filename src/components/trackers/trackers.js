import React, { Component } from "react";
import "../app/app.css";
import Track from "./../track";
//import firebase from "../../util/firebase.js";
import { connect } from "react-redux";
import compose from "./../../util/compose";
import withTrackService from "./../hoc";

import Spinner from "./../spinner";
import ErrorNotification from "./../error-notification";

class Trackers extends Component {
  /*
  state = {
    trackList: [],
  };

  componentDidMount() {
    const trackRef = firebase.database().ref("Track");
    trackRef.on("value", (snapshot) => {
      const tracks = snapshot.val();
      const trackList = [];
      for (let id in tracks) {
        trackList.push({ id, ...tracks[id] });
      }
      this.setState({trackList});
    });
  };
  */
  render() {
    const { loading, error, trackList } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorNotification />;
    }

    return (
      <div className="table-row">
        <table id="trackers">
          <tbody>
            {console.log(trackList)}
            {trackList.map((track, index) => (
              <Track track={track} key={index} idx={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ trackList, loading, error }) => {
  return {
    trackList,
    loading,
    error,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default compose(
  withTrackService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Trackers);
