import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateParticipant } from "../../../../redux/actions/participantActions";
import { useNavigate } from 'react-router-dom';

export const useParticipantHandler = (trialType, participant) => {
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
        navigate("/ThankYou");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch, navigate, participant, updateParticipantComplete]);
};
