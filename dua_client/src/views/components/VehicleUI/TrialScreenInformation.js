import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import {
  setCurrentScreen,
  setPriorScreens,
} from "../../../redux/actions/trialActions";
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

const TrialScreenInformation = ({
  onClose,
  test, 
  screens,
  setShowOverlay,
  trialType,
  setCurrentScreenIndex,
  information,
  nextIndex,
  screenName,
  displayTimeSeconds,
}) => {
  const [closing, setClosing] = useState(false);
  
  // This handles changing screens when the Timeout happens
  const handleTimeout = () => {
    setClosing(true);
    console.log("handleTimeout: closing screen");
    const actionName = screenName + "_timeout";
    onClose(test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex);
  };

  // This custom hook handles the timeout functionality
  useTimeout(handleTimeout, displayTimeSeconds);

  const handleOk = async (nextIndex) => {

    const actionName = screenName + "_ok";
    setClosing(true);
    setTimeout(() => onClose(test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex), 300);
  };

  useEffect(() => {
    setCurrentScreen(screenName);
    return () => setClosing(false);
  }, [screenName]);

  return (
    <StyledTrialScreen closing={closing}>
      <TopBorder />
      <InfoText>{information}</InfoText>
      <OkButton onClick={() => handleOk(nextIndex)}>Ok</OkButton>
    </StyledTrialScreen>
  );
};

const StyledTrialScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 63%;
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

const InfoText = styled.div`
  font-size: 2.75rem;
  font-weight: bold;
  text-align: center;
`;

const OkButton = styled.button`
  align-self: center;
  background-color: #007bff;
  color: #fff;
  padding: 20px 40px;
  border-radius: 25px;
  font-size: 24px;
  cursor: pointer;
  border: none;
  transition: transform 250ms, background-color 250ms, box-shadow 250ms;
  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #3391ff;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default TrialScreenInformation;
