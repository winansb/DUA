import {
  CREATE_SCREEN_SUCCESS,
  CREATE_SCREEN_FAILURE,
  FINISH_SCREEN_SUCCESS,
  FINISH_SCREEN_FAILURE,
  GET_SCREEN_SUCCESS,
  GET_SCREEN_FAILURE,
  SCREEN_TRANSITION,
} from "../actions/screenActions";

const initialState = {
  screen: null,
  error: null,
  loading: false,
  currentScreen: null,
  nextScreen: null,
  screenHistory: [],
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SCREEN_SUCCESS:
      return {
        ...state,
        screen: action.payload,
        error: null,
        loading: false,
      };
    case CREATE_SCREEN_FAILURE:
      return {
        ...state,
        screen: null,
        error: action.payload,
        loading: false,
      };
    case FINISH_SCREEN_SUCCESS:
      return {
        ...state,
        screen: action.payload,
        error: null,
        loading: false,
      };
    case FINISH_SCREEN_FAILURE:
      return {
        ...state,
        screen: null,
        error: action.payload,
        loading: false,
      };
    case GET_SCREEN_SUCCESS:
      return {
        ...state,
        screen: action.payload,
        error: null,
        loading: false,
      };
    case GET_SCREEN_FAILURE:
      return {
        ...state,
        screen: null,
        error: action.payload,
        loading: false,
      };
        case SCREEN_TRANSITION:
            const { currentScreen, nextScreen } = action.payload;
            return {
                ...state,
                currentScreen: currentScreen,
                nextScreen: nextScreen,
                screenHistory: [...state.screenHistory, { closed: currentScreen, opened: nextScreen }],
            };
    default:
      return state;
  }
};

export default screenReducer;
