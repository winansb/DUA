import React, { useState } from "react";
import styled from "styled-components";
import ParticipantTable from "./components/ParticipantTable";
import { createParticipant } from '../redux/actions/participantActions';
import { useDispatch } from 'react-redux';

function TrialSetup() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createParticipant({ PARTICIPANT_NAME: inputValue }));
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  

  return (
    <Container>
      <Title>Testing Setup</Title>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter participant name"
        />
        <Button type="submit">Add Participant</Button>
      </Form>
      <ParticipantTable />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TextInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  margin-right: 1rem;
  width: 300px;
`;

const Button = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #a180b3;
  }
`;

export default TrialSetup;