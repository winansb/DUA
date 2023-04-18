import { screenController } from "../../controllers/screenController";

// action types
export const CREATE_SCREEN_SUCCESS = "CREATE_SCREEN_SUCCESS";
export const CREATE_SCREEN_FAILURE = "CREATE_SCREEN_FAILURE";
export const FINISH_SCREEN_SUCCESS = "FINISH_SCREEN_SUCCESS";
export const FINISH_SCREEN_FAILURE = "FINISH_SCREEN_FAILURE";
export const GET_SCREEN_SUCCESS = "GET_SCREEN_SUCCESS";
export const GET_SCREEN_FAILURE = "GET_SCREEN_FAILURE";

// action creators
export const createScreen = (newScreen) => {
  return async (dispatch) => {
    try {
      const screen = await screenController.createScreen(newScreen);
      dispatch({ type: CREATE_SCREEN_SUCCESS, payload: screen });

      return screen;
    } catch (error) {
      console.error("createScreen error:", error);
      dispatch({ type: CREATE_SCREEN_FAILURE, payload: error.message });
    }
  };
};

export const finishScreen = (uid) => {
  return async (dispatch) => {
    try {
      const screen = await screenController.finishScreen(uid);
      dispatch({ type: FINISH_SCREEN_SUCCESS, payload: screen });

      return screen;
    } catch (error) {
      console.error(`finishScreen error for ${uid}:`, error);
      dispatch({ type: FINISH_SCREEN_FAILURE, payload: error.message });
    }
  };
};

export const getScreen = (uid) => {
  return async (dispatch) => {
    try {
      const screen = await screenController.getScreen(uid);
      dispatch({ type: GET_SCREEN_SUCCESS, payload: screen });

      return screen;
    } catch (error) {
      console.error(`getScreen error for ${uid}:`, error);
      dispatch({ type: GET_SCREEN_FAILURE, payload: error.message });
    }
  };
};
