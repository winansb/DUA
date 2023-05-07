import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTest } from "../../../redux/actions/testActions";
import { useNavigate } from "react-router-dom";

const ParticipantConfirmForm = ({ participant, column, onClose }) => {
  const [test, setTest] = useState(null);
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

  const onConfirm = () => {
    navigate("/trial-run", { state: { test, participant, column } });
  };

  if (!test) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Test Confirmation</h2>
      <InfoContainer>
        <InfoRow>
          <InfoLabel>ID</InfoLabel>
          <InfoLabel>MCI</InfoLabel>
          <InfoLabel>Order</InfoLabel>
          <InfoLabel>Use Playbook</InfoLabel>
          <InfoLabel>
            {column === 0 ? "Next Destination" : "Emergency Contact Breakdown"}
          </InfoLabel>
          <InfoLabel>
            {column === 0 ? "Go Home" : "Roadside Assistance"}
          </InfoLabel>
          <InfoLabel>
            {column === 0 ? "Emergency Contact Detour" : "Relaxing Music"}
          </InfoLabel>
        </InfoRow>
        <InfoRow>
          <InfoData>{participant.PARTICIPANT_ID}</InfoData>
          <InfoData>{test.MCI}</InfoData>
          <InfoData>{test.ORDER}</InfoData>
          <InfoData>{test.USE_PLAYBOOK}</InfoData>
          <InfoData>
            {test[column === 0 ? "NEXT_DESTINATION" : "EMERGENCY_CONTACT_BREAKDOWN"]}
          </InfoData>
          <InfoData>
            {test[column === 0 ? "GO_HOME" : "ROADSIDE_ASSISTANCE"]}
          </InfoData>
          <InfoData>
            {test[column === 0 ? "EMERGENCY_CONTACT_BREAKDOWN" : "RELAXING_MUSIC"]}
          </InfoData>
        </InfoRow>
      </InfoContainer>
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
