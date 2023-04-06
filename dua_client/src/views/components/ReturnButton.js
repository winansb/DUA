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

  &:hover {
    background-color: #a180b3;
  }
`;

export default ReturnButton;