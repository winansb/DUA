import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTest } from "../../redux/actions/testActions";
import styled from "styled-components";
import GeneralModal from "./GeneralModal";
import ParticipantSubmitForm from "./ParticipantSubmitForm";
import ParticipantConfirmForm from "./ParticipantConfirmForm";

const StyledButton = styled.button`
  background-color: ${({ buttonState }) =>
    buttonState === "state1"
      ? "#72c48b"
      : buttonState === "state2"
      ? "#84a7d3"
      : "#d6d8d6"};
  color: #000;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${({ buttonState }) =>
      buttonState === "state1"
        ? "#3CB371"
        : buttonState === "state2"
        ? "#6d93c0"
        : "#c0c0c0"};
    color: #fff;
  }

  &:active {
    background-color: ${({ buttonState }) =>
      buttonState === "state1"
        ? "#375D45"
        : buttonState === "state2"
        ? "#6d93c0"
        : "#c0c0c0"};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const TrialButton = ({ participant, column }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [test, setTest] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTest = async () => {
      const testId = participant.ONGOING_TEST;
      const fetchedTest = await dispatch(getTest(testId));
      setTest(fetchedTest);
    };

    fetchTest();
  }, [dispatch, participant.ONGOING_TEST]);

  const handleModalTransition = () => {
    setShowSubmitModal(false);
    setShowConfirmModal(true);
  };

  const determineButtonState = () => {
    if (
      (column === 0 &&
        !participant.DETOUR_COMPLETE &&
        participant.DETOUR_IN_PROGRESS === 0) ||
      (column === 1 &&
        !participant.BREAKDOWN_COMPLETE &&
        participant.BREAKDOWN_IN_PROGRESS === 0)
    ) {
      return "state1";
    }
    if (
      (column === 0 &&
        (participant.DETOUR_COMPLETE ||
          participant.DETOUR_IN_PROGRESS !== 0)) ||
      (column === 1 &&
        (participant.BREAKDOWN_COMPLETE ||
          participant.BREAKDOWN_IN_PROGRESS !== 0))
    ) {
      return "state2";
    }
    if (
      (column === 0 &&
        participant.DETOUR_COMPLETE &&
        participant.DETOUR_IN_PROGRESS === 0) ||
      (column === 1 &&
        participant.BREAKDOWN_COMPLETE &&
        participant.BREAKDOWN_IN_PROGRESS === 0)
    ) {
      return "state3";
    }
  };

  const getButtonText = () => {
    const buttonState = determineButtonState();
    if (buttonState === "state1") {
      return column === 0 ? "Start Detour" : "Start Breakdown";
    }
    if (buttonState === "state2") {
      return column === 0 ? "Continue Detour" : "Continue Breakdown";
    }
    if (buttonState === "state3") {
      return column === 0 ? "Detour Complete" : "Breakdown Complete";
    }
  };

  const handleButtonClick = () => {
    const buttonState = determineButtonState();

    if (buttonState === "state1") {
      setShowSubmitModal(true);
    } else if (buttonState === "state2") {
      setShowConfirmModal(true);
    }
  };

  const buttonState = determineButtonState();
  const isDisabled = buttonState === "state3";

  return (
    <>
      <StyledButton
        buttonState={buttonState}
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        {getButtonText()}
      </StyledButton>

      {showSubmitModal && (
        <GeneralModal
          content={
            <ParticipantSubmitForm
              participant={participant}
              column={column}
              onClose={() => setShowSubmitModal(false)}
              onModalTransition={handleModalTransition}
            />
          }
          onClose={() => {
            setShowSubmitModal(false);
          }}
        />
      )}

      {showConfirmModal && (
        <GeneralModal
          content={
            <ParticipantConfirmForm
              participant={participant}
              column={column}
              onClose={() => setShowConfirmModal(false)}
            />
          }
          onClose={() => setShowConfirmModal(false)}
        />
      )}
    </>
  );
};

export default TrialButton;
