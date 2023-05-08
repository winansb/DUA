import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateParticipant } from "../../redux/actions/participantActions";
import VehicleUIContainer from "./VehicleUIContainer";

const TrialRun = () => {
  const location = useLocation();
  const { test, participant, trialType } = location.state;
  const [status, setStatus] = useState("welcome");
  const [showTrial, setShowTrial] = useState(false);
  const [countDown, setCountDown] = useState(null);
  const [videoWindow, setVideoWindow] = useState(null);
  const [targetOrigin, setTargetOrigin] = useState("*");
  const dispatch = useDispatch();

  function updateParticipantInProgress(participant) {
    const upperCaseTrialType = trialType.toUpperCase();
    participant[`${upperCaseTrialType}_IN_PROGRESS`] = true;
    return participant;
  }

  useEffect(() => {
    const updatedParticipant = updateParticipantInProgress(participant);
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
    setStatus("countdown");
    setCountDown(3);
  };

  useEffect(() => {
    let timer;
    if (status === "countdown" && countDown !== null) {
      timer = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [status, countDown]);

  useEffect(() => {
    if (countDown === 0) {
      setStatus("trial");
      setShowTrial(true);
      videoWindow.postMessage({ action: "setType", trialType: trialType }, targetOrigin || "*");
      videoWindow.postMessage({ action: "play", trialType: trialType }, targetOrigin || "*");
    }
  }, [countDown]);

  return (
    <div>
      {!showTrial && (
        <ScreenWrapper>
          {status === "welcome" && (
            <WelcomeWrapper>
              Welcome, {participant.PARTICIPANT_NAME}
            </WelcomeWrapper>
          )}
          {status === "countdown" && (
            <>
              <WelcomeWrapper>Trial beginning in {countDown}</WelcomeWrapper>
            </>
          )}
          {status === "welcome" && (
            <InstructionWrapper onClick={handleStartTrial}>
              <p>Press when you are ready to start</p>
            </InstructionWrapper>
          )}
        </ScreenWrapper>
      )}
      {showTrial && (
        <VehicleUIContainer
          test={test}
          participant={participant}
          trialType={trialType}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
        />
      )}
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
