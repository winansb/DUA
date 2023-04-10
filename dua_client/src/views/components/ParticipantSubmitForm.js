import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { updateParticipant } from '../../redux/actions/participantActions';
import { updateTest, getTest } from '../../redux/actions/testActions';
import { useDispatch } from 'react-redux';

function ParticipantSubmitForm({ onClose, participant, column  }) {
  const [participantName, setParticipantName] = useState(participant.PARTICIPANT_NAME);
  const [mci, setMci] = useState('');
  const [order, setOrder] = useState('');
  const [usePlaybook, setUsePlaybook] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchTest = async () => {
      const test = await dispatch(getTest(participant.ONGOING_TEST));

      if (test) {
        setMci(test.data.MCI);
        setOrder(test.data.ORDER);
        setUsePlaybook(test.data.USE_PLAYBOOK);
        setOption1(test.data[column === 0 ? 'DETOUR_OPTION_1' : 'BREAKDOWN_OPTION_1']);
        setOption2(test.data[column === 0 ? 'DETOUR_OPTION_2' : 'BREAKDOWN_OPTION_2']);
        setOption3(test.data[column === 0 ? 'DETOUR_OPTION_3' : 'BREAKDOWN_OPTION_3']);
      }
    };

    fetchTest();
  }, [dispatch, participant.ONGOING_TEST, column]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedParticipant = null;
    let updatedTest = null;

    if (participantName !== participant.name) {
      updatedParticipant = { ...participant, name: participantName };
      // Call the API to update the participant
    }

    const newTestData = {
      MCI: mci,
      ORDER: parseInt(order),
      USE_PLAYBOOK: usePlaybook,
      [column === 0 ? 'DETOUR_OPTION_1' : 'BREAKDOWN_OPTION_1']: option1,
      [column === 0 ? 'DETOUR_OPTION_2' : 'BREAKDOWN_OPTION_2']: option2,
      [column === 0 ? 'DETOUR_OPTION_3' : 'BREAKDOWN_OPTION_3']: option3,
    };

    if (JSON.stringify(newTestData) !== JSON.stringify(test)) {
      updatedTest = { ...test, ...newTestData };
      // Call the API to update the test
    }

    if (updatedParticipant || updatedTest) {
      // Call the API to update the participant and/or test
      // If you are using Redux, dispatch an action here
    }

    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Participant Name:
        <Input type="text" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
      </Label>
      <Label>
        MCI:
        <Select value={mci} onChange={(e) => setMci(e.target.value)}>
          <option value="">{mci}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        Order:
        <Select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="">{order}</option>
          <option value="0">0</option>
          <option value="1">1</option>
        </Select>
      </Label>
      <Label>
        Use Playbook:
        <Select value={usePlaybook} onChange={(e) => setUsePlaybook(e.target.value)}>
          <option value="">{usePlaybook}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? 'Detour Option 1:' : 'Breakdown Option 1:'}
        <Select value={option1} onChange={(e) => setOption1(e.target.value)}>
          <option value="">{option1}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? 'Detour Option 2:' : 'Breakdown Option 2:'}
        <Select value={option2} onChange={(e) => setOption2(e.target.value)}>
          <option value="">{option2}</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Label>
      <Label>
        {column === 0 ? 'Detour Option 3:' : 'Breakdown Option 3:'}
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
}export default ParticipantSubmitForm; 

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
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  width: 100%;
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