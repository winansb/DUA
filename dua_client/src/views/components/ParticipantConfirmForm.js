import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTest } from "../../redux/actions/testActions";
import { useNavigate } from "react-router-dom";

const ParticipantConfirmForm = ({ participant, column, onClose }) => {
  const [test, setTest] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTest = async () => {
      const testId = participant.ONGOING_TEST;
      const response = await dispatch(getTest(testId));
      const fetchedTest = response.data;
      setTest(fetchedTest);
    };

    fetchTest();
  }, [dispatch, participant.ONGOING_TEST]);

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
          <InfoLabel>Name</InfoLabel>
          <InfoLabel>MCI</InfoLabel>
          <InfoLabel>Order</InfoLabel>
          <InfoLabel>Use Playbook</InfoLabel>
          <InfoLabel>
            {column === 0 ? "Detour Option 1" : "Breakdown Option 1"}
          </InfoLabel>
          <InfoLabel>
            {column === 0 ? "Detour Option 2" : "Breakdown Option 2"}
          </InfoLabel>
          <InfoLabel>
            {column === 0 ? "Detour Option 3" : "Breakdown Option 3"}
          </InfoLabel>
        </InfoRow>
        <InfoRow>
          <InfoData>{participant.PARTICIPANT_NAME}</InfoData>
          <InfoData>{test.MCI}</InfoData>
          <InfoData>{test.ORDER}</InfoData>
          <InfoData>{test.USE_PLAYBOOK}</InfoData>
          <InfoData>
            {test[column === 0 ? "DETOUR_OPTION_1" : "BREAKDOWN_OPTION_1"]}
          </InfoData>
          <InfoData>
            {test[column === 0 ? "DETOUR_OPTION_2" : "BREAKDOWN_OPTION_2"]}
          </InfoData>
          <InfoData>
            {test[column === 0 ? "DETOUR_OPTION_3" : "BREAKDOWN_OPTION_3"]}
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
