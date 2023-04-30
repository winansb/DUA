import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getParticipant,
  updateParticipant,
  getAllParticipants,
} from "../../redux/actions/participantActions";
import { updateTest, getTest } from "../../redux/actions/testActions";
import { useDispatch } from "react-redux";

function ParticipantSubmitForm({
  onClose,
  participant,
  column,
  onModalTransition,
}) {
  const [participantID, setParticipantName] = useState(
    participant.PARTICIPANT_ID
  );
  const [mci, setMci] = useState("");
  const [order, setOrder] = useState("");
  const [usePlaybook, setUsePlaybook] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const [breakdownComplete, setBreakdownComplete] = useState(
    participant.BREAKDOWN_COMPLETE
  );
  const [detourComplete, setDetourComplete] = useState(
    participant.DETOUR_COMPLETE
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTest = async () => {
      const test = await dispatch(getTest(participant.TRIAL_ID));

      if (test) {
        setMci(test.data.MCI);
        setOrder(test.data.ORDER);
        setUsePlaybook(test.data.USE_PLAYBOOK);
        setOption1(
          test.data[column === 0 ? "NEXT_DESTINATION" : "EMERGENCY_CONTACT_BREAKDOWN"]
        );
        setOption2(
          test.data[column === 0 ? "GO_HOME" : "ROADSIDE_ASSISTANCE"]
        );
        setOption3(
          test.data[column === 0 ? "EMERGENCY_CONTACT_DETOUR" : "RELAXING_MUSIC"]
        );
      }
    };

    fetchTest();
  }, [dispatch, participant.TRIAL_ID, column]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const shouldFieldBeDisabled = (column) => {
    if (column === 0) {
      return breakdownComplete;
    } else if (column === 1) {
      return detourComplete;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch the original participant and test objects
    const originalParticipant = await dispatch(getParticipant(participant.UID));
    const { data: originalTest } = await dispatch(
      getTest(participant.TRIAL_ID)
    );

    // Create a new participant object with the form input values
    const newParticipant = {
      ...originalParticipant,
      PARTICIPANT_ID: participantID,
    };

    // Create a new test object with the form input values
    const newTest = {
      ...originalTest,
      MCI: mci,
      ORDER: parseInt(order),
      USE_PLAYBOOK: usePlaybook,
      [column === 0 ? "NEXT_DESTINATION" : "EMERGENCY_CONTACT_BREAKDOWN"]: option1,
      [column === 0 ? "GO_HOME" : "ROADSIDE_ASSISTANCE"]: option2,
      [column === 0 ? "EMERGENCY_CONTACT_DETOUR" : "RELAXING_MUSIC"]: option3,
    };

    // Compare the new participant object with the original one and update if needed
    if (
      JSON.stringify(newParticipant) !== JSON.stringify(originalParticipant)
    ) {
      await dispatch(updateParticipant(participant.UID, newParticipant));
      dispatch(getAllParticipants());
    }

    // Compare the new test object with the original one and update if needed
    if (JSON.stringify(newTest) !== JSON.stringify(originalTest)) {
      await dispatch(updateTest(participant.TRIAL_ID, newTest));
    }

    onModalTransition();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Participant ID:
        <Input
          type="text"
          value={participantID}
          onChange={(e) => setParticipantName(e.target.value)}
          disabled={shouldFieldBeDisabled(column)}
        />
      </Label>
      <Label>
        MCI:
        <Select
          value={mci}
          onChange={(e) => setMci(e.target.value)}
          disabled={shouldFieldBeDisabled(column)}
        >
          <option value="">{mci}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        Order:
        <Select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          disabled={shouldFieldBeDisabled(column)}
        >
          <option value="">{order}</option>
          <option value="0">0</option>
          <option value="1">1</option>
        </Select>
      </Label>
      <Label>
        Use Playbook:
        <Select
          value={usePlaybook}
          onChange={(e) => setUsePlaybook(e.target.value)}
          disabled={shouldFieldBeDisabled(column)}
        >
          <option value="">{usePlaybook}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? "Next Destination:" : "Emergency Contact Breakdown:"}
        <Select value={option1} onChange={(e) => setOption1(e.target.value)}>
          <option value="">{option1}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? "Go Home:" : "Roadside Assistance:"}
        <Select value={option2} onChange={(e) => setOption2(e.target.value)}>
          <option value="">{option2}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? "Emergency Contact Detour" : "Relaxing Music:"}
        <Select value={option3} onChange={(e) => setOption3(e.target.value)}>
          <option value="">{option3}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <ButtonRow>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ButtonRow>
    </Form>
  );
}
export default ParticipantSubmitForm;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  width: 100%;
  ${({ disabled }) => disabled && "background-color: #f0f0f0;"}
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  width: 100%;
  ${({ disabled }) => disabled && "background-color: #f0f0f0;"}
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  grid-column: span 2;
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
