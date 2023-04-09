import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ParticipantTable from "./components/ParticipantTable";
import ReturnButton from './components/ReturnButton';
import { useDispatch, useSelector } from 'react-redux';
import ParticipantModal from './components/ParticipantModal';
import { getAllParticipants } from '../redux/actions/participantActions';

function TrialSetup() {

  const [showModal, setShowModal] = useState(false); 
  const [participantsData, setParticipantsData] = useState([]); 

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const participants = useSelector((state) => state.participant.participants);

  useEffect(() => {
    if (showModal === false) {
      dispatch(getAllParticipants());
    }
  }, [dispatch, showModal]);


  return (
    <Container>
      <Title>Testing Setup</Title>
      <Button onClick={handleOpenModal}>Add Participant</Button>
      {showModal && (
        <ParticipantModal
          onClose={handleCloseModal}
        />
      )}
      <ParticipantTable />
      <ReturnButtonWrapper>
        <ReturnButton />
      </ReturnButtonWrapper>
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

const Button = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;

  &:hover {
    background-color: #a180b3;
  }
`;

const ReturnButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
  width: 100%;
`;

export default TrialSetup;