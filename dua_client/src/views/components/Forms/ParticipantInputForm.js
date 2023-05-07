import React, { useState } from "react";
import styled from "styled-components";
import { createParticipant } from "../../../redux/actions/participantActions";
import { createTest } from "../../../redux/actions/testActions";
import { useDispatch } from "react-redux";

function ParticipantInputForm({ onClose }) {
  const [participantID, setParticipantName] = useState("");
  const [mci, setMci] = useState("");
  const [order, setOrder] = useState("");
  const [usePlaybook, setUsePlaybook] = useState("");
  const [emergency_contact_breakdown, setbreakOption1] = useState("");
  const [roadside_assistance, setbreakOption2] = useState("");
  const [relaxing_music, setbreakOption3] = useState("");
  const [next_destination, setdetourOption1] = useState("");
  const [go_home, setdetourOption2] = useState("");
  const [emergency_contact_detour, setdetourOption3] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      participantID &&
      mci &&
      order &&
      usePlaybook &&
      emergency_contact_breakdown &&
      roadside_assistance &&
      relaxing_music &&
      next_destination &&
      go_home &&
      emergency_contact_detour
    ) {
      const testData = {
        PARTICIPANT_ID: participantID,
        MCI: mci,
        ORDER: order,
        USE_PLAYBOOK: usePlaybook,
        EMERGENCY_CONTACT_BREAKDOWN: emergency_contact_breakdown,
        ROADSIDE_ASSISTANCE: roadside_assistance,
        RELAXING_MUSIC: relaxing_music,
        NEXT_DESTINATION: next_destination,
        GO_HOME: go_home,
        EMERGENCY_CONTACT_DETOUR: emergency_contact_detour,
      };

      const createdTest = await dispatch(createTest(testData));
      console.log(createdTest);

      dispatch(
        createParticipant({
          PARTICIPANT_ID: participantID,
          TRIAL_ID: createdTest.UID,
        })
      );
      onClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Participant ID:
        <Input
          type="text"
          value={participantID}
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
          <option value="Detour">Detour</option>
          <option value="Breakdown">Breakdown</option>
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
          Emergency Contact Breakdown:
          <Select
            value={emergency_contact_breakdown}
            onChange={(e) => setbreakOption1(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Next Destination:
          <Select
            value={next_destination}
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
          Roadside Assistance:
          <Select
            value={roadside_assistance}
            onChange={(e) => setbreakOption2(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Home:
          <Select
            value={go_home}
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
          Music:
          <Select
            value={relaxing_music}
            onChange={(e) => setbreakOption3(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Label>
        <Label>
          Emergency Contact Detour:
          <Select
            value={emergency_contact_detour}
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
