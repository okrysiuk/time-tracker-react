const initialState = {
  loading: true,
  error: null,
  timer: 0,
  newTitle: "",
  trackList: [],
};

function reducer(state = initialState, action) {
  if (action.type === "CHANGE_NEW_TITLE") {
    return {
      ...state,
      newTitle: action.payload,
    };
  }
  if (action.type === "ADD_NEW_TRACK") {
    const newTrack = {
      title:
        state.newTitle === ""
          ? `Track ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
          : state.newTitle,
      fullTime: 0,
      isActive: true,
    };
    return {
      ...state,
      timer: 0,
      trackList: [...state.trackList, newTrack],
    };
  }
  if (action.type === "SET_TIMER") {
    return {
      ...state,
      timer: state.timer + 1000,
    };
  }

  if (action.type === "SET_ACTIVITY") {
    const newTrack = state.trackList[action.payload];
    newTrack.isActive = !newTrack.isActive;
    return {
      ...state,
      trackList: [
        ...state.trackList.slice(0, action.payload),
        newTrack,
        ...state.trackList.slice(action.payload + 1),
      ],
    };
  }

  if (action.type === "SET_FULL_TIME") {
    const newTrack = state.trackList[action.payload];
    newTrack.fullTime = newTrack.fullTime + 1000;
    return {
      ...state,
      trackList: [
        ...state.trackList.slice(0, action.payload),
        newTrack,
        ...state.trackList.slice(action.payload + 1),
      ],
    };
  }

  return state;
}

export default reducer;
