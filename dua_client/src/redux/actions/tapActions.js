import { tapController } from "../../controllers/tapController";

export const CREATE_TAP_REQUEST = "CREATE_TAP_REQUEST";
export const CREATE_TAP_SUCCESS = "CREATE_TAP_SUCCESS";
export const CREATE_TAP_FAILURE = "CREATE_TAP_FAILURE";
export const GET_TAP_REQUEST = "GET_TAP_REQUEST";
export const GET_TAP_SUCCESS = "GET_TAP_SUCCESS";
export const GET_TAP_FAILURE = "GET_TAP_FAILURE";
export const UPDATE_TAP_REQUEST = "UPDATE_TAP_REQUEST";
export const UPDATE_TAP_SUCCESS = "UPDATE_TAP_SUCCESS";
export const UPDATE_TAP_FAILURE = "UPDATE_TAP_FAILURE";

export const createTap = (tapData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_TAP_REQUEST });
    try {
      const tap = await tapController.createTap(tapData);
      dispatch({
        type: CREATE_TAP_SUCCESS,
        payload: tap,
      });

      return tap;
    } catch (error) {
      dispatch({
        type: CREATE_TAP_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getTap = (uid) => {
  return async (dispatch) => {
    dispatch({ type: GET_TAP_REQUEST });
    try {
      const tap = await tapController.getTap(uid);
      dispatch({
        type: GET_TAP_SUCCESS,
        payload: tap,
      });

      return tap;
    } catch (error) {
      dispatch({
        type: GET_TAP_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateTap = (uid, tapData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_TAP_REQUEST });
    try {
      const updatedTap = await tapController.updateTap(uid, tapData);
      dispatch({
        type: UPDATE_TAP_SUCCESS,
        payload: updatedTap,
      });

      return updatedTap;
    } catch (error) {
      dispatch({
        type: UPDATE_TAP_FAILURE,
        payload: error.message,
      });
    }
  };
};
