import { testController } from '../../controllers/testController';

export const CREATE_TEST_REQUEST = "CREATE_TEST_REQUEST";
export const CREATE_TEST_SUCCESS = "CREATE_TEST_SUCCESS";
export const CREATE_TEST_FAILURE = "CREATE_TEST_FAILURE";
export const UPDATE_TEST_REQUEST = "UPDATE_TEST_REQUEST";
export const UPDATE_TEST_SUCCESS = "UPDATE_TEST_SUCCESS";
export const UPDATE_TEST_FAILURE = "UPDATE_TEST_FAILURE";
export const UPDATE_BREAKDOWN_TEST_ID_REQUEST = "UPDATE_BREAKDOWN_TEST_ID_REQUEST";
export const UPDATE_BREAKDOWN_TEST_ID_SUCCESS = "UPDATE_BREAKDOWN_TEST_ID_SUCCESS";
export const UPDATE_BREAKDOWN_TEST_ID_FAILURE = "UPDATE_BREAKDOWN_TEST_ID_FAILURE";
export const UPDATE_DETOUR_TEST_ID_REQUEST = "UPDATE_DETOUR_TEST_ID_REQUEST";
export const UPDATE_DETOUR_TEST_ID_SUCCESS = "UPDATE_DETOUR_TEST_ID_SUCCESS";
export const UPDATE_DETOUR_TEST_ID_FAILURE = "UPDATE_DETOUR_TEST_ID_FAILURE";
export const GET_TEST_REQUEST = "GET_TEST_REQUEST";
export const GET_TEST_SUCCESS = "GET_TEST_SUCCESS";
export const GET_TEST_FAILURE = "GET_TEST_FAILURE";

export const createTest = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: CREATE_TEST_REQUEST });
        const data = await testController.createTest();
        dispatch({ type: CREATE_TEST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: CREATE_TEST_FAILURE, payload: error.message });
      }
    };
  };
  
  export const updateTest = (uid, data) => {
    return async (dispatch) => {
      try {
        dispatch({ type: UPDATE_TEST_REQUEST });
        const response = await testController.updateTest(uid, data);
        dispatch({ type: UPDATE_TEST_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: UPDATE_TEST_FAILURE, payload: error.message });
      }
    };
  };
  
  export const updateBreakdownTestId = (uid, breakdownTestId) => {
    return async (dispatch) => {
      try {
        dispatch({ type: UPDATE_BREAKDOWN_TEST_ID_REQUEST });
        const response = await testController.updateBreakdownTestId(uid, breakdownTestId);
        dispatch({ type: UPDATE_BREAKDOWN_TEST_ID_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: UPDATE_BREAKDOWN_TEST_ID_FAILURE, payload: error.message });
      }
    };
  };
  
  export const updateDetourTestId = (uid, detourTestId) => {
    return async (dispatch) => {
      try {
        dispatch({ type: UPDATE_DETOUR_TEST_ID_REQUEST });
        const response = await testController.updateDetourTestId(uid, detourTestId);
        dispatch({ type: UPDATE_DETOUR_TEST_ID_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: UPDATE_DETOUR_TEST_ID_FAILURE, payload: error.message });
      }
    };
  };
  
  export const getTest = (uid) => {
    return async (dispatch) => {
      try {
        dispatch({ type: GET_TEST_REQUEST });
        const data = await testController.getTest(uid);
        dispatch({ type: GET_TEST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_TEST_FAILURE, payload: error.message });
      }
    };
  };
  
  
  