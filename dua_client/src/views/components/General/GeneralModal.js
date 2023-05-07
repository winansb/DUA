import React, { useState } from "react";
import styled from "styled-components";

function GeneralModal({ content, onClose }) {
  return (
    <ModalOverlay>
      <Modal>{content && React.cloneElement(content, { onClose })}</Modal>
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
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default GeneralModal;
