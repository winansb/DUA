import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Trial from './components/Trial';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { updateParticipant } from '../redux/actions/participantActions';

const TrialRun = () => {
  const location = useLocation();
  const { test, participant, column } = location.state;
  const [showTrial, setShowTrial] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch

  function updateParticipantComplete(participant) {
    if (column === 0) {
      participant.DETOUR_COMPLETE = true;
    } else if (column === 1) {
      participant.BREAKDOWN_COMPLETE = true;
    }
    return participant;
  }

  function handleStart() {
    const updatedParticipant = updateParticipantComplete(participant);
    dispatch(updateParticipant(updatedParticipant.UID, updatedParticipant)); // Dispatch updateParticipant action
    setShowTrial(true);
  }

  return (
    <div>
      {!showTrial && (
        <>
          <ScreenWrapper>
            <WelcomeWrapper>Welcome, {participant.PARTICIPANT_NAME}</WelcomeWrapper>
            <InstructionWrapper onClick={handleStart}>
              <p>Press when you are ready to start</p>
            </InstructionWrapper>
          </ScreenWrapper>
        </>
      )}
      {showTrial && <Trial test={test} participant={participant} column={column} />}
    </div>
  );
};

export default TrialRun;
const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WelcomeWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const InstructionWrapper = styled.div`
  color: #777;
  font-size: 2rem;
  cursor: pointer;
  padding: 20px;
  border: 2px solid #777;
  border-radius: 10px;
`;