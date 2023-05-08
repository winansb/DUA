import React, { useState } from "react";
import styled from "styled-components";

function GeneralModal({ content, onClose }) {
  return (
    <ModalOverlay>
      <Modal>
        {content && (
          <ModalContent>
            {React.cloneElement(content, { onClose })}
          </ModalContent>
        )}
      </Modal>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 600px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
  overflow-y: auto;
  max-width: 600px;
  max-height: 600px;
`;

export default GeneralModal;