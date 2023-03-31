import { participantController } from '../../controllers/participantController';

// Action types
export const CREATE_PARTICIPANT_SUCCESS = 'CREATE_PARTICIPANT_SUCCESS';
export const CREATE_PARTICIPANT_FAILURE = 'CREATE_PARTICIPANT_FAILURE';
export const UPDATE_DETOUR_COMPLETE_SUCCESS = 'UPDATE_DETOUR_COMPLETE_SUCCESS';
export const UPDATE_DETOUR_COMPLETE_FAILURE = 'UPDATE_DETOUR_COMPLETE_FAILURE';
export const UPDATE_BREAKDOWN_COMPLETE_SUCCESS = 'UPDATE_BREAKDOWN_COMPLETE_SUCCESS';
export const UPDATE_BREAKDOWN_COMPLETE_FAILURE = 'UPDATE_BREAKDOWN_COMPLETE_FAILURE';
export const UPDATE_TEST_IN_PROGRESS_SUCCESS = 'UPDATE_TEST_IN_PROGRESS_SUCCESS';
export const UPDATE_TEST_IN_PROGRESS_FAILURE = 'UPDATE_TEST_IN_PROGRESS_FAILURE';
export const GET_PARTICIPANT_SUCCESS = 'GET_PARTICIPANT_SUCCESS';
export const GET_PARTICIPANT_FAILURE = 'GET_PARTICIPANT_FAILURE';

// Action creators
export const createParticipant = (participantData) => async (dispatch) => {
  try {
    const createdParticipant = await participantController.createParticipant(participantData);
    dispatch({
      type: CREATE_PARTICIPANT_SUCCESS,
      payload: createdParticipant,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PARTICIPANT_FAILURE,
      error,
    });
  }
};

export const updateDetourComplete = (uid) => async (dispatch) => {
  try {
    const updatedParticipant = await participantController.updateDetourComplete(uid);
    dispatch({
      type: UPDATE_DETOUR_COMPLETE_SUCCESS,
      payload: updatedParticipant,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_DETOUR_COMPLETE_FAILURE,
      error,
    });
  }
};

export const updateBreakdownComplete = (uid) => async (dispatch) => {
  try {
    const updatedParticipant = await participantController.updateBreakdownComplete(uid);
    dispatch({
      type: UPDATE_BREAKDOWN_COMPLETE_SUCCESS,
      payload: updatedParticipant,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BREAKDOWN_COMPLETE_FAILURE,
      error,
    });
  }
};

export const updateTestInProgress = (uid) => async (dispatch) => {
  try {
    const updatedParticipant = await participantController.updateTestInProgress(uid);
    dispatch({
      type: UPDATE_TEST_IN_PROGRESS_SUCCESS,
      payload: updatedParticipant,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TEST_IN_PROGRESS_FAILURE,
      error,
    });
  }
};

export const getParticipant = (uid) => async (dispatch) => {
  try {
    const participant = await participantController.getParticipant(uid);
    dispatch({
      type: GET_PARTICIPANT_SUCCESS,
      payload: participant,
    });
  } catch (error) {
    dispatch({
      type: GET_PARTICIPANT_FAILURE,
      error,
    });
  }
};