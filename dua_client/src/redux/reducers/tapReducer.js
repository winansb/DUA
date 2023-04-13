import {
  CREATE_TAP_REQUEST,
  CREATE_TAP_SUCCESS,
  CREATE_TAP_FAILURE,
  GET_TAP_REQUEST,
  GET_TAP_SUCCESS,
  GET_TAP_FAILURE,
  UPDATE_TAP_REQUEST,
  UPDATE_TAP_SUCCESS,
  UPDATE_TAP_FAILURE,
} from "../actions/tapActions";

const initialState = {
  tap: null,
  loading: false,
  error: null,
};

const tapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TAP_REQUEST:
    case GET_TAP_REQUEST:
    case UPDATE_TAP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_TAP_SUCCESS:
    case GET_TAP_SUCCESS:
    case UPDATE_TAP_SUCCESS:
      return {
        ...state,
        tap: action.payload,
        loading: false,
      };
    case CREATE_TAP_FAILURE:
    case GET_TAP_FAILURE:
    case UPDATE_TAP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tapReducer;