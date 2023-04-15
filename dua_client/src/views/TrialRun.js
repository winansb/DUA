import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateParticipant } from "../redux/actions/participantActions";
import TrialWrapper from "./TrialWrapper";

const TrialRun = () => {
  const location = useLocation();
  const { test, participant, column } = location.state;
  const [showTrial, setShowTrial] = useState(false);
  const [countDown, setCountDown] = useState(null);
  const [videoWindow, setVideoWindow] = useState(null);
  const [targetOrigin, setTargetOrigin] = useState("*");
  const dispatch = useDispatch();

  function updateParticipantComplete(participant) {
    if (column === 0) {
      participant.DETOUR_COMPLETE = true;
    } else if (column === 1) {
      participant.BREAKDOWN_COMPLETE = true;
    }
    return participant;
  }

  useEffect(() => {
    const updatedParticipant = updateParticipantComplete(participant);
    dispatch(updateParticipant(updatedParticipant.UID, updatedParticipant));

    const openedWindow = window.open(
      "/trial-video",
      "TrialVideo",
      `width=${800},height=${800},left=${0},top=${0}`
    );
    setVideoWindow(openedWindow);

    const handleWindowLoad = () => {
      setTargetOrigin(openedWindow.location.origin);
    };

    openedWindow.addEventListener("load", handleWindowLoad);

    return () => {
      openedWindow.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  const handleStartTrial = () => {
    setCountDown(3);
    setTimeout(() => setCountDown(2), 1000);
    setTimeout(() => setCountDown(1), 2000);
    setTimeout(() => {
      setCountDown(null);
      setShowTrial(true);
      videoWindow.postMessage({ action: "play" }, targetOrigin || "*");
    }, 3000);
  };

  return (
    <div>
      {!showTrial && (
        <>
          <ScreenWrapper>
            <WelcomeWrapper>
              Welcome, {participant.PARTICIPANT_NAME}
            </WelcomeWrapper>
            {countDown ? (
              <CountdownWrapper>{countDown}</CountdownWrapper>
            ) : (
              <InstructionWrapper onClick={handleStartTrial}>
                <p>Press when you are ready to start</p>
              </InstructionWrapper>
            )}
          </ScreenWrapper>
        </>
      )}
      {showTrial && (
        <TrialWrapper
          test={test}
          participant={participant}
          column={column}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
        />
      )}
    </div>
  );
};

export default TrialRun;

const CountdownWrapper = styled.div`
  font-size: 6rem;
  margin-bottom: 20px;
  color: #333;
`;

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
