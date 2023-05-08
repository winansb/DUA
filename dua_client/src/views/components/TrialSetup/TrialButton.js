import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTest } from "../../../redux/actions/testActions";
import styled from "styled-components";
import GeneralModal from "../General/GeneralModal";
import ParticipantSubmitForm from "../Forms/ParticipantSubmitForm";
import ParticipantConfirmForm from "../Forms/ParticipantConfirmForm";



const TrialButton = ({ participant, trialType, setTest }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTest = async () => {
      const testId = participant.TRIAL_ID;
      const fetchedTest = await dispatch(getTest(testId));
      setTest(fetchedTest.data);
    };

    fetchTest();
  }, [dispatch, participant.TRIAL_ID]);

  const handleModalTransition = () => {
    setShowSubmitModal(false);
    setShowConfirmModal(true);
  };
  const determineButtonState = () => {
    const upperCaseTrialType = trialType.toUpperCase();
  
    if (
      !participant[`${upperCaseTrialType}_COMPLETE`] &&
      participant[`${upperCaseTrialType}_IN_PROGRESS`] === 0
    ) {
      return "state1";
    }
    if (participant[`${upperCaseTrialType}_IN_PROGRESS`] !== 0) {
      return "state2";
    }
    if (participant[`${upperCaseTrialType}_COMPLETE`]) {
      return "state3";
    }
  };

  const getButtonText = () => {
    const buttonState = determineButtonState();
    if (buttonState === "state1") {
      return `Start ${trialType}`;
    }
    if (buttonState === "state2") {
      return `Continue ${trialType}`;
    }
    if (buttonState === "state3") {
      return "Completed";
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
              trialType={trialType}
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
              trialType={trialType}
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
