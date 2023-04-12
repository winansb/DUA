import {
    SHOW_VIDEO,
    HIDE_VIDEO,
    END_TRIAL,
    CHANGE_VIDEO,
    PAUSE_VIDEO,
  } from '../actions/trialActions';
  
  const initialState = {
    videoVisible: false,
    trialEnded: false,
    videoSrc: '',
    videoPaused: false,
  };
  
  const trialReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_VIDEO:
        return {
          ...state,
          videoVisible: true,
        };
      case HIDE_VIDEO:
        return {
          ...state,
          videoVisible: false,
        };
      case END_TRIAL:
        return {
          ...state,
          trialEnded: true,
        };
      case CHANGE_VIDEO:
        return {
          ...state,
          videoSrc: action.payload,
        };
      case PAUSE_VIDEO:
        return {
          ...state,
          videoPaused: true,
        };
      default:
        return state;
    }
  };
  
  export default trialReducer;