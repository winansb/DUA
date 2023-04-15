import React, { useState, useEffect } from "react";
import styled from "styled-components";

function KeyCodeGetter(props) {
  const [keyCode, setKeyCode] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      setKeyCode(e.keyCode);
      setIsActive(false);
    }

    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  const translateKeyCode = (code) => {
    switch (code) {
      case 32:
        return "Space";
      case 37:
        return "Left Arrow";
      case 38:
        return "Up Arrow";
      case 39:
        return "Right Arrow";
      case 40:
        return "Down Arrow";
      default:
        return String.fromCharCode(code);
    }
  };

  const buttonText = keyCode ? translateKeyCode(keyCode) : "Click";

  return (
    <Container isActive={isActive} secondaryColor={props.secondaryColor}>
      <Button onClick={handleButtonClick}>
        <InnerCircle>{buttonText}</InnerCircle>
      </Button>
    </Container>
  );
}

export default KeyCodeGetter;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 5px solid ${({ secondaryColor }) => secondaryColor};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${({ isActive, secondaryColor }) =>
    isActive &&
    `
    border-color: #00bfff;
    box-shadow: 0 0 10px ${secondaryColor};
  `}
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  width: 90%;
  height: 90%;
`;

const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive, secondaryColor }) =>
    isActive ? "#00bfff" : "#fff"};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease-in-out;
`;
