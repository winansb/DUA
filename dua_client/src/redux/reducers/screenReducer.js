import {
    CREATE_SCREEN_SUCCESS,
    CREATE_SCREEN_FAILURE,
    FINISH_SCREEN_SUCCESS,
    FINISH_SCREEN_FAILURE,
    GET_SCREEN_SUCCESS,
    GET_SCREEN_FAILURE
  } from "../../actions/screenAction";
  
  const initialState = {
    screen: null,
    error: null,
    loading: false
  };
  
  const screenReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_SCREEN_SUCCESS:
        return {
          ...state,
          screen: action.payload,
          error: null,
          loading: false
        };
      case CREATE_SCREEN_FAILURE:
        return {
          ...state,
          screen: null,
          error: action.payload,
          loading: false
        };
      case FINISH_SCREEN_SUCCESS:
        return {
          ...state,
          screen: action.payload,
          error: null,
          loading: false
        };
      case FINISH_SCREEN_FAILURE:
        return {
          ...state,
          screen: null,
          error: action.payload,
          loading: false
        };
      case GET_SCREEN_SUCCESS:
        return {
          ...state,
          screen: action.payload,
          error: null,
          loading: false
        };
      case GET_SCREEN_FAILURE:
        return {
          ...state,
          screen: null,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default screenReducer;