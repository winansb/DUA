import { testController } from "../../controllers/testController";

export const CREATE_TEST_REQUEST = "CREATE_TEST_REQUEST";
export const CREATE_TEST_SUCCESS = "CREATE_TEST_SUCCESS";
export const CREATE_TEST_FAILURE = "CREATE_TEST_FAILURE";
export const UPDATE_TEST_REQUEST = "UPDATE_TEST_REQUEST";
export const UPDATE_TEST_SUCCESS = "UPDATE_TEST_SUCCESS";
export const UPDATE_TEST_FAILURE = "UPDATE_TEST_FAILURE";
export const GET_TEST_REQUEST = "GET_TEST_REQUEST";
export const GET_TEST_SUCCESS = "GET_TEST_SUCCESS";
export const GET_TEST_FAILURE = "GET_TEST_FAILURE";

export const createTest = (testData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_TEST_REQUEST });
      const data = await testController.createTest(testData);
      dispatch({ type: CREATE_TEST_SUCCESS, payload: data });

      return data;
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

      return response;
    } catch (error) {
      dispatch({ type: UPDATE_TEST_FAILURE, payload: error.message });
    }
  };
};

export const getTest = (uid) => {
  return async (dispatch) => {
    if (!uid) {
      // Handle the case when uid is undefined or null
      console.error("The test ID is undefined or null");
      return;
    }

    try {
      dispatch({ type: GET_TEST_REQUEST });
      const data = await testController.getTest(uid);
      dispatch({ type: GET_TEST_SUCCESS, payload: data });

      return data;
    } catch (error) {
      dispatch({ type: GET_TEST_FAILURE, payload: error.message });
    }
  };
};

