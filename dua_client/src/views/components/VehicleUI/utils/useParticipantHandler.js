import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateParticipant } from "../../../../redux/actions/participantActions";
import { useNavigate } from 'react-router-dom';
import { handleScreenTransition } from './handleScreenTransition';

//This changes the backend name for the final action in trials
const trialEndAction = "Trial_End";

export const useParticipantHandler = (trialType, participant, videoWindow, test) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateParticipantComplete = useCallback((participant) => {
    const upperCaseTrialType = trialType.toUpperCase();
    participant[`${upperCaseTrialType}_COMPLETE`] = true;
    participant[`${upperCaseTrialType}_IN_PROGRESS`] = false;
    return participant;
  }, [trialType]);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.action === "finalVideoEnded") {
        const updatedParticipant = updateParticipantComplete(participant);
        dispatch(updateParticipant(updatedParticipant.UID, updatedParticipant));
        handleScreenTransition('end', test, trialEndAction, videoWindow, dispatch);
        navigate("/ThankYou");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch, navigate, participant, updateParticipantComplete]);
};
