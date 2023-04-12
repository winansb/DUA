import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReturnButton = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <StyledButton>Return</StyledButton>
    </Link>
  );
};

const StyledButton = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: transform 250ms; 

  &:hover,
  &:focus-visible {
    background-color: #a180b3;
    transform: translateY(0.15rem);
    transition: transform 250ms; 

  }
`;

export default ReturnButton;