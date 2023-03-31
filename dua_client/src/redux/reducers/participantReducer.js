import {
    CREATE_PARTICIPANT_SUCCESS,
    CREATE_PARTICIPANT_FAILURE,
    UPDATE_DETOUR_COMPLETE_SUCCESS,
    UPDATE_DETOUR_COMPLETE_FAILURE,
    UPDATE_BREAKDOWN_COMPLETE_SUCCESS,
    UPDATE_BREAKDOWN_COMPLETE_FAILURE,
    UPDATE_TEST_IN_PROGRESS_SUCCESS,
    UPDATE_TEST_IN_PROGRESS_FAILURE,
    GET_PARTICIPANT_SUCCESS,
    GET_PARTICIPANT_FAILURE,
    GET_ALL_PARTICIPANTS_SUCCESS,
    GET_ALL_PARTICIPANTS_FAILURE,
  } from '../actions/participantActions';
  
  const initialState = {
    participant: null,
    isParticipantLoading: false,
    isParticipantError: false,
    detourComplete: false,
    breakdownComplete: false,
    testInProgress: false,
    createParticipantSuccess: false,
    createParticipantError: null,
    participants: [],
  };
  
  const participantReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PARTICIPANT_SUCCESS:
        return {
          ...state,
          [action.payload.uid]: action.payload,
        };
      case CREATE_PARTICIPANT_FAILURE:
        console.error('createParticipant error:', action.error);
        return state;
      case UPDATE_DETOUR_COMPLETE_SUCCESS:
      case UPDATE_BREAKDOWN_COMPLETE_SUCCESS:
      case UPDATE_TEST_IN_PROGRESS_SUCCESS:
      case GET_PARTICIPANT_SUCCESS:
        return {
          ...state,
          [action.payload.uid]: {
            ...state[action.payload.uid],
            ...action.payload,
          },
        };
      case UPDATE_DETOUR_COMPLETE_FAILURE:
      case UPDATE_BREAKDOWN_COMPLETE_FAILURE:
      case UPDATE_TEST_IN_PROGRESS_FAILURE:
      case GET_PARTICIPANT_FAILURE:
        console.error(`participant error for ${action.error.uid}:`, action.error);
        return state;
      case GET_ALL_PARTICIPANTS_SUCCESS:
        return {
          ...state,
          participants: action.payload,
          error: null,
        };
        case GET_ALL_PARTICIPANTS_FAILURE:
        return {
          ...state,
          participants: [],
          error: action.error,
        };
        default:
        return state;
    }
  };
  
  export default participantReducer;
  