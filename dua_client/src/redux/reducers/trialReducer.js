import {
  SET_CURRENT_SCREEN,
  SET_PRIOR_SCREENS,
  CLEAR_TRIAL,
  SET_MAP,
  SET_TRAVEL_TIME,
  SET_PAUSED,
  SET_DESTINATION,
} from "../actions/trialActions";

const initialState = {
  currentScreen: "",
  priorScreens: [],
  map: "StartMap",
  travelTime: 0,
  isPaused: false,
  destination: "walgreens",
};

export const trialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return { ...state, currentScreen: action.payload };
    case SET_PRIOR_SCREENS:
      return { ...state, priorScreens: action.payload };
    case CLEAR_TRIAL:
      return { ...initialState };
    case SET_MAP:
      return { ...state, map: action.payload };
    case SET_TRAVEL_TIME:
      return { ...state, travelTime: action.payload };
    case SET_PAUSED:
      return { ...state, isPaused: action.payload };
    case SET_DESTINATION:
      return { ...state, destination: action.destination };
    default:
      return state;
  }
};
