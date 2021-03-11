export const changeTitle = (e) => {
  return {
    type: "CHANGE_NEW_TITLE",
    payload: e.target.value,
  };
};

export const addTrack = () => {
  return {
    type: "ADD_NEW_TRACK",
  };
};

export const sessionTimeInc = (idx) => {
  return {
    type: "SESSION_TIME_INCREMENT",
    payload: idx,
  };
};

export const setTimer = () => {
  return {
    type: "SET_TIMER",
  };
};

export const setActivity = (idx) => {
  return {
    type: "SET_ACTIVITY",
    payload: idx,
  };
};

export const setFullTime = (idx) => {
  return {
    type: "SET_FULL_TIME",
    payload: idx,
  };
};
