import React, { useState } from "react";
import styled from "styled-components";
import { createParticipant } from "../../redux/actions/participantActions";
import { createTest } from "../../redux/actions/testActions";
import { useDispatch } from "react-redux";

function ParticipantInputForm({ onClose }) {
  const [participantName, setParticipantName] = useState("");
  const [mci, setMci] = useState("");
  const [order, setOrder] = useState("");
  const [usePlaybook, setUsePlaybook] = useState("");
  const [break_option1, setbreakOption1] = useState("");
  const [break_option2, setbreakOption2] = useState("");
  const [break_option3, setbreakOption3] = useState("");
  const [detour_option1, setdetourOption1] = useState("");
  const [detour_option2, setdetourOption2] = useState("");
  const [detour_option3, setdetourOption3] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      participantName &&
      mci &&
      order &&
      usePlaybook &&
      break_option1 &&
      break_option2 &&
      break_option3 &&
      detour_option1 &&
      detour_option2 &&
      detour_option3
    ) {
      const testData = {
        MCI: mci,
        ORDER: parseInt(order),
        USE_PLAYBOOK: usePlaybook,
        BREAKDOWN_OPTION_1: break_option1,
        BREAKDOWN_OPTION_2: break_option2,
        BREAKDOWN_OPTION_3: break_option3,
        DETOUR_OPTION_1: detour_option1,
        DETOUR_OPTION_2: detour_option2,
        DETOUR_OPTION_3: detour_option3,
      };

      const createdTest = await dispatch(createTest(testData));
      console.log(createdTest);

      dispatch(
        createParticipant({
          PARTICIPANT_NAME: participantName,
          ONGOING_TEST: createdTest.UID,
        })
      );
      onClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Participant Name:
        <Input
          type="text"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
        />
      </Label>
      <Label>
        MCI:
        <Select value={mci} onChange={(e) => setMci(e.target.value)}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        Order:
        <Select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="">Select...</option>
          <option value="0">0</option>
          <option value="1">1</option>
        </Select>
      </Label>
      <Label>
        Use Playbook:
        <Select
          value={usePlaybook}
          onChange={(e) => setUsePlaybook(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <LabelRow>
        <Label>
          Breakdown Option 1:
          <Select
            value={break_option1}
            onChange={(e) => setbreakOption1(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Detour Option 1:
          <Select
            value={detour_option1}
            onChange={(e) => setdetourOption1(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
      </LabelRow>
      <LabelRow>
        <Label>
          Breakdown Option 2:
          <Select
            value={break_option2}
            onChange={(e) => setbreakOption2(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Detour Option 2:
          <Select
            value={detour_option2}
            onChange={(e) => setdetourOption2(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
      </LabelRow>
      <LabelRow>
        <Label>
          Breakdown Option 3:
          <Select
            value={break_option3}
            onChange={(e) => setbreakOption3(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Detour Option 3:
          <Select
            value={detour_option3}
            onChange={(e) => setdetourOption3(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
      </LabelRow>
      <ButtonRow>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
      </ButtonRow>
    </Form>
  );
}
export default ParticipantInputForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
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
