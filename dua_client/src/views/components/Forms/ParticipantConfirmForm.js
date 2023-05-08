import React, { useEffect, useState, useCallback  } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTest } from "../../../redux/actions/testActions";
import { useNavigate } from "react-router-dom";
import generalData from "../../../data/GeneralData";
import trialDataArray from "../../../data/TrialData";

const ParticipantConfirmForm = ({ participant, trialType, onClose }) => {
  const [test, setTest] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTest = async () => {
      const testId = participant.TRIAL_ID;
      const response = await dispatch(getTest(testId));
      const fetchedTest = response.data;
      setTest(fetchedTest);
    };

    fetchTest();
  }, [dispatch, participant.TRIAL_ID]);

  useEffect(() => {
    if (test) {
      const initialValues = {};

      generalData.forEach((field) => {
        initialValues[field.serverName] = test[field.serverName] || "";
      });

      trialDataArray.forEach((trial) => {
        if (trial.trialType === trialType) {
          trial.preTrialQuestions.forEach((item) => {
            initialValues[item.serverName] = test[item.serverName] || "";
          });
        }
      });

      setSelectedOptions(initialValues);
    }
  }, [test, trialType, participant]);

  const onConfirm = () => {
    navigate("/trial-run", { state: { test, participant, trialType } });
  };

  if (!test) {
    return <div>Loading...</div>;
  }

  const trial = trialDataArray.find((t) => t.trialType === trialType);

  return (
    <Container>
      <h1>Test Confirmation</h1>
      {generalData.map((field) => (
        <InfoRow key={field.id}>
          <InfoLabel>{field.label}:</InfoLabel>
          <InfoData>{selectedOptions[field.serverName]}</InfoData>
        </InfoRow>
      ))}
      <React.Fragment key={`trial-${trialType}`}>
        <h1>{trial.trialType}</h1>
        {trial.preTrialQuestions.map((item, index) => (
          <InfoRow key={`${trial.trialType}-${index}`}>
            <InfoLabel>{item.question}:</InfoLabel>
            <InfoData>{selectedOptions[item.serverName]}</InfoData>
          </InfoRow>
        ))}
      </React.Fragment>
      <Buttons>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <SubmitButton onClick={onConfirm}>Confirm</SubmitButton>
      </Buttons>
    </Container>
  );
};

export default ParticipantConfirmForm;

const Container = styled.div`
  text-align: center;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  font-weight: bold;
  flex: 1;
  text-align: left;
`;

const InfoData = styled.div`
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 4px;
  flex: 1;
  text-align: left;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  margin-right: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;

const SubmitButton = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #a180b3;
  }
`;
