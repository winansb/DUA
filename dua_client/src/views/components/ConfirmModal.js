import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

function ConfirmModal({ show, onHide, participant, column }) {
  const [participantName, setParticipantName] = useState(participant.PARTICIPANT_NAME);
  const [mci, setMci] = useState('');
  const [order, setOrder] = useState('');
  const [usePlaybook, setUsePlaybook] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Submit Test</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Label>
            Participant Name:
            <Input type="text" value={participantName} readOnly />
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
            <Select value={usePlaybook} onChange={(e) => setUsePlaybook(e.target.value)}>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Label>
          <Label>
            {column === 0 ? 'Detour Option 1:' : 'Breakdown Option 1:'}
            <Select value={option1} onChange={(e) => setOption1(e.target.value)}>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Label>
          <Label>
            {column === 0 ? 'Detour Option 2:' : 'Breakdown Option 2:'}
            <Select value={option2} onChange={(e) => setOption2(e.target.value)}>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Label>
          <Label>
            {column === 0 ? 'Detour Option 3:' : 'Breakdown Option 3:'}
            <Select value={option3} onChange={(e) => setOption3(e.target.value)}>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Label>
          <ButtonRow>
            <CancelButton onClick={onHide}>Cancel</CancelButton>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </ButtonRow>
        </Form>
      </Modal.Body>
      </Modal>
  );
}export default ConfirmModal; 

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