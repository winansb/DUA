import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { getTap, updateTap } from "../../../redux/actions/tapActions";
import {
  setCurrentScreen,
  setPriorScreens,
} from "../../../redux/actions/trialActions";

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
  information,
  nextIndex,
  screenName,
  displayTimeSeconds,
}) => {
  const [closing, setClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        onClose(nextIndex);
      }, displayTimeSeconds * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen, displayTimeSeconds, onClose]);

  const disaptch = useDispatch();

  const handleClose = (nextIndex) => {
    setClosing(true);
    // add getTap after making it return the most recent tap
    // format new Tap object, we will be fillin in the tap action
    // screenName and screen sequence.
    setTimeout(onClose(nextIndex), 300);
  };

  useEffect(() => {
    setCurrentScreen(screenName);
    return () => setClosing(false);
  }, []);

  return (
    <StyledTrialScreen closing={closing}>
      <TopBorder />
      <InfoText>{information}</InfoText>
      <OkButton onClick={() => handleClose(nextIndex)}>Ok</OkButton>
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
