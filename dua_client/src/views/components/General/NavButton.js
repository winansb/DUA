import React from "react";
import styled from "styled-components";

const NavButton = ({ link, text }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return <StyledButton onClick={handleButtonClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #6a5acd;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #483d8b;
  }
`;

export default NavButton;
