import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store.js";
import { TrackServiceProvider } from "./components/track-service-context";
import TrackService from "./services/track-service";

const trackService = new TrackService();

ReactDOM.render(
  <Provider store={store}>
    <TrackServiceProvider value={trackService}>
      <App />
    </TrackServiceProvider>
  </Provider>,
  document.getElementById("root")
);
