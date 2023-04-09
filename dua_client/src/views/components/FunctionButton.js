import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || '#4CAF50'}; /* Green */
  border: ${(props) => props.border || 'none'};
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;

  :hover {
    background-color: ${(props) => props.hoverColor || '#3e8e41'};
  }

  :active {
    background-color: ${(props) => props.activeColor || '#4CAF50'};
    transform: translateY(2px);
  }
`;

function FunctionButton(props) {
  const { onClick, text, borderColor, backgroundColor, hoverColor, activeColor } = props;

  return (
    <StyledButton
      onClick={onClick}
      border={borderColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
    >
      {text}
    </StyledButton>
  );
}

export default FunctionButton;