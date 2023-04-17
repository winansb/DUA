export const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN";
export const SET_PRIOR_SCREENS = "SET_PRIOR_SCREENS";
export const CLEAR_TRIAL = "CLEAR_TRIAL";
export const SET_MAP = "SET_MAP";
export const SET_TRAVEL_TIME = "SET_TRAVEL_TIME";
export const SET_PAUSED = "SET_PAUSED";
export const SET_DESTINATION = "SET_DESTINATION";

export const setCurrentScreen = (screenName) => ({
  type: SET_CURRENT_SCREEN,
  payload: screenName,
});

export const setPriorScreens = (priorScreens) => ({
  type: SET_PRIOR_SCREENS,
  payload: priorScreens,
});

export const clearTrial = () => ({
  type: CLEAR_TRIAL,
});

export const setMap = (mapName) => ({
  type: SET_MAP,
  payload: mapName,
});

export const setTravelTime = (time) => ({
  type: SET_TRAVEL_TIME,
  payload: time,
});

export const setPaused = (isPaused) => ({
  type: SET_PAUSED,
  payload: isPaused,
});

export const setDestination = (destination) => ({
  type: SET_DESTINATION,
  payload: destination,
});
