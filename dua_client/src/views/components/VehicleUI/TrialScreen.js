import React from "react";
import styled from "styled-components";

// This component is to keep the same overall look for each screen 
const TrialScreen = ({ onClose }) => {
  return (
    <StyledTrialScreen>
      <TopBorder />
      <OkButton onClick={onClose}>Ok</OkButton>
    </StyledTrialScreen>
  );
};

const StyledTrialScreen = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: #fff;
  border: 3px solid #3c3c3c;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`;

const TopBorder = styled.div`
  height: 10px;
  background-color: red;
  width: 100%;
`;

const OkButton = styled.button`
  align-self: center;
  background-color: #007bff;
  color: #fff;
  padding: 20px 40px;
  border-radius: 25px;
  font-size: 24px;
  cursor: pointer;
  border: none;
  transition: transform 250ms, background-color 250ms, box-shadow 250ms;
  margin-top: auto;
  margin-bottom: 20px;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #3391ff;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
  }
`;
export default TrialScreen;
