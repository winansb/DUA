import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { getScreen } from "../../../redux/actions/screenActions";
import { setDestination } from "../../../redux/actions/trialActions";
import useTimeout from "./utils/useTimeout";

const popIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const popOut = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
`;

const TrialScreenPrompt = ({
  onClose, // handleScreenClose from screenCloser.js 
  setCurrentScreenIndex, // setScreenIndex from VehicleUIContainer.js
  test,
  screens,
  setShowOverlay,
  trialType,
  screenName,
  contents,
  displayTimeSeconds,
  yesIndex,
  noIndex,
  yesDestination,
}) => {
  const [closing, setClosing] = useState(false);
  const dispatch = useDispatch();

  const handleYes = async (nextIndex) => {
    // Example of changing the destination of the trial when a user clicks an option
    console.log(yesDestination);
    dispatch(setDestination(yesDestination));

    const actionName = screenName + "_yes";
    handleClose(actionName, nextIndex);
  };

  const handleNo = async (nextIndex) => {
    const actionName = screenName + "_no";
    handleClose(actionName, nextIndex);
  };

  const handleClose = (actionName, nextIndex) => {
    setClosing(true);
    setTimeout(() => onClose(test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex), 300);
  };

  useEffect(() => {
    return () => setClosing(false);
  }, []);

  // This handles changing screens when the Timeout happens
  const handleTimeout = () => {
    setClosing(true);
    console.log("handleTimeout: closing screen");
    const actionName = screenName + "_timeout";
    //Here is the line where we assume the next index is the no index when timeout. This could be replaced by a unique timoutIndex
    onClose(test, screens, setShowOverlay, trialType, noIndex, screenName, actionName, setCurrentScreenIndex);
  };

  // This custom hook handles the timeout functionality
  useTimeout(handleTimeout, displayTimeSeconds);

  // Here are the visuals of the screen
  return (
    <StyledTrialScreen closing={closing}>
      <TopBorder />
      {contents}
      <ButtonRow>
        <YesButton onClick={() => handleYes(yesIndex)}>Yes</YesButton>
        <NoButton onClick={() => handleNo(noIndex)}>No</NoButton>
      </ButtonRow>
    </StyledTrialScreen>
  );
};

const StyledTrialScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: calc(100% - 40px);
  height: auto;
  max-height: calc(100% - 40px);
  background-color: #fff;
  border: 3px solid #3c3c3c;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);

  animation: ${({ closing }) => (closing ? popOut : popIn)} 0.3s ease-out;
`;

const TopBorder = styled.div`
  height: 10px;
  background-color: red;
  width: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const YesButton = styled.button`
  flex: 1;
  background-color: #007bff;
  color: #fff;
  padding: 20px 40px;
  border-radius: 25px;
  font-size: 24px;
  cursor: pointer;
  border: none;
  transition: transform 250ms, background-color 250ms, box-shadow 250ms;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  margin-right: 10px;

  &:hover {
    background-color: #3391ff;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
  }
`;

const NoButton = styled.button`
  flex: 1;
  background-color: #fff;
  color: #000;
  padding: 20px 40px;
  border-radius: 25px;
  font-size: 24px;
  cursor: pointer;
  border: 2px solid #000;
  transition: transform 250ms, background-color 250ms, box-shadow 250ms;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  margin-left: 10px;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default TrialScreenPrompt;
