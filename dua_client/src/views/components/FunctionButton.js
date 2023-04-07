import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  :hover {
    background-color: #3e8e41;
  }

  :active {
    background-color: #4CAF50;
    transform: translateY(2px);
  }
`;

function FunctionButton(props) {
  const { onClick, children } = props;

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default FunctionButton;