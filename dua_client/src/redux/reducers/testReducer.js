import {
  CREATE_TEST_REQUEST,
  CREATE_TEST_SUCCESS,
  CREATE_TEST_FAILURE,
  UPDATE_TEST_REQUEST,
  UPDATE_TEST_SUCCESS,
  UPDATE_TEST_FAILURE,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS,
  GET_TEST_FAILURE,
} from "../actions/testActions";

const initialState = {
  isCreatingTest: false,
  createTestError: "",
  isUpdatingTest: false,
  updateTestError: "",
  isUpdatingBreakdownTestId: false,
  updateBreakdownTestIdError: "",
  isUpdatingDetourTestId: false,
  updateDetourTestIdError: "",
  isGettingTest: false,
  getTestError: "",
  test: null,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEST_REQUEST:
      return { ...state, isCreatingTest: true, createTestError: "" };
    case CREATE_TEST_SUCCESS:
      return { ...state, isCreatingTest: false, test: action.payload };
    case CREATE_TEST_FAILURE:
      return {
        ...state,
        isCreatingTest: false,
        createTestError: action.payload,
      };
    case UPDATE_TEST_REQUEST:
      return { ...state, isUpdatingTest: true, updateTestError: "" };
    case UPDATE_TEST_SUCCESS:
      return { ...state, isUpdatingTest: false, test: action.payload };
    case UPDATE_TEST_FAILURE:
      return {
        ...state,
        isUpdatingTest: false,
        updateTestError: action.payload,
      };
    case GET_TEST_REQUEST:
      return { ...state, isGettingTest: true, getTestError: "" };
    case GET_TEST_SUCCESS:
      return { ...state, isGettingTest: false, test: action.payload };
    case GET_TEST_FAILURE:
      return { ...state, isGettingTest: false, getTestError: action.payload };
    default:
      return state;
  }
};

export default testReducer;
