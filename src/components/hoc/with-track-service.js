import React from "react";
import { TrackServiceConsumer } from "./../track-service-context";

const withTrackService = () => (Wrapped) => {
  return (props) => {
    return (
      <TrackServiceConsumer>
        {(trackService) => {
          return <Wrapped {...props} trackService={trackService} />;
        }}
      </TrackServiceConsumer>
    );
  };
};

export default withTrackService;
