import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getParticipant, deleteParticipant } from '../../redux/actions/participantActions';
import styled from 'styled-components';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      borderRadius: '10px',
      padding: '30px',
      textAlign: 'center',
    },
  };


  const DeleteModal = ({ isOpen, closeModal, uid, getParticipant, deleteParticipant }) => {
    const [participant, setParticipant] = useState(null);
    const [deleteText, setDeleteText] = useState('');
  
    useEffect(() => {
      if (isOpen && uid) {
        getParticipant(uid).then((fetchedParticipant) => {
          setParticipant(fetchedParticipant);
        });
      }
    }, [isOpen, uid, getParticipant]);
  
    const handleDelete = () => {
      deleteParticipant(uid);
      closeModal();
    };
  
    const handleInputChange = (e) => {
      setDeleteText(e.target.value.toUpperCase());
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>Delete Participant</h2>
        {participant && (
          <>
            <p>
              Are you sure you want to delete participant {participant.UID} -{' '}
              {participant.PARTICIPANT_NAME}?
            </p>
            <input
              type="text"
              placeholder="Type DELETE to confirm"
              value={deleteText}
              onChange={handleInputChange}
            />
            <button onClick={handleDelete} disabled={deleteText !== 'DELETE'}>
              Yes, delete
            </button>
          </>
        )}
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    );
  };
  
  const mapDispatchToProps = {
    getParticipant,
    deleteParticipant,
  };
  
  export default connect(null, mapDispatchToProps)(DeleteModal);