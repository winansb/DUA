import { participantController } from '../../controllers/participantController';

// Action types
export const CREATE_PARTICIPANT_SUCCESS = 'CREATE_PARTICIPANT_SUCCESS';
export const CREATE_PARTICIPANT_FAILURE = 'CREATE_PARTICIPANT_FAILURE';
export const GET_PARTICIPANT_SUCCESS = 'GET_PARTICIPANT_SUCCESS';
export const GET_PARTICIPANT_FAILURE = 'GET_PARTICIPANT_FAILURE';
export const GET_ALL_PARTICIPANTS_SUCCESS = 'GET_ALL_PARTICIPANTS_SUCCESS';
export const GET_ALL_PARTICIPANTS_FAILURE = 'GET_ALL_PARTICIPANTS_FAILURE';
export const DELETE_PARTICIPANT_SUCCESS = 'DELETE_PARTICIPANT_SUCCESS';
export const DELETE_PARTICIPANT_FAILURE = 'DELETE_PARTICIPANT_FAILURE';
export const UPDATE_PARTICIPANT_SUCCESS = 'UPDATE_PARTICIPANT_SUCCESSS';
export const UPDATE_PARTICIPANT_FAILURE = 'UPDATE_PARTICIPANT_FAILLURE'; 

// Action creators
export const createParticipant = (participantData) => async (dispatch) => {
  try {
    const createdParticipant = await participantController.createParticipant(participantData);
    dispatch({
      type: CREATE_PARTICIPANT_SUCCESS,
      payload: createdParticipant,
    });
    
    return createdParticipant;
  } catch (error) {
    dispatch({
      type: CREATE_PARTICIPANT_FAILURE,
      error,
    });
  }
};

export const updateParticipant = (uid, updatedParticipant) => async (dispatch) => {
  try {
    const updatedData = await participantController.updateParticipant(uid, updatedParticipant);
    dispatch({
      type: UPDATE_PARTICIPANT_SUCCESS,
      payload: updatedData,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PARTICIPANT_FAILURE,
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

export const getAllParticipants = () => async (dispatch) => {
  try {
    const participants = await participantController.getAllParticipants();
    dispatch({
      type: GET_ALL_PARTICIPANTS_SUCCESS,
      payload: participants,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PARTICIPANTS_FAILURE,
      error,
    });
  }
};

export const deleteParticipant = (uid) => async (dispatch) => {
  try {
    const deletedParticipant = await participantController.deleteParticipant(uid);
    dispatch({
      type: DELETE_PARTICIPANT_SUCCESS,
      payload: deletedParticipant,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PARTICIPANT_FAILURE,
      error,
    });
  }
};