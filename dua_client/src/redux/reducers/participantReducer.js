import {
  CREATE_PARTICIPANT_SUCCESS,
  CREATE_PARTICIPANT_FAILURE,
  UPDATE_PARTICIPANT_SUCCESS,
  UPDATE_PARTICIPANT_FAILURE,
  GET_PARTICIPANT_SUCCESS,
  GET_PARTICIPANT_FAILURE,
  GET_ALL_PARTICIPANTS_SUCCESS,
  GET_ALL_PARTICIPANTS_FAILURE,
  DELETE_PARTICIPANT_SUCCESS,
  DELETE_PARTICIPANT_FAILURE,
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
        [action.payload.UID]: action.payload,
      };
    case CREATE_PARTICIPANT_FAILURE:
      console.error('createParticipant error:', action.error);
      return state;
    case UPDATE_PARTICIPANT_SUCCESS:
    case GET_PARTICIPANT_SUCCESS:
      return {
        ...state,
        [action.payload.UID]: {
          ...state[action.payload.UID],
          ...action.payload,
        },
      };
    case UPDATE_PARTICIPANT_FAILURE:
    case GET_PARTICIPANT_FAILURE:
      console.error(`participant error for ${action.error.UID}:`, action.error);
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

    case DELETE_PARTICIPANT_SUCCESS:
      return {
        ...state,
        participants: state.participants.filter(
          (participant) => participant.UID !== action.payload.UID
        ),
        error: null,
      };
    case DELETE_PARTICIPANT_FAILURE:
      console.error('deleteParticipant error:', action.error);
      return state;
    // ...
    default:
      return state;
  }
};

export default participantReducer;