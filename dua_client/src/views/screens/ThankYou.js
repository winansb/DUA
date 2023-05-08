import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ThankYouSlide = ({  }) => {
 const navigate = useNavigate();
    const onSetupClick = () => {
        navigate("/trial-setup");
    }

  return (
    <Container>
      <Message>Thank you! Your trial has ended.</Message>
      <SetupButton onClick={onSetupClick}>
        Press this to begin trial setup
      </SetupButton>
    </Container>
  );
};

export default ThankYouSlide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Message = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const SetupButton = styled.button`
  background-color: #72c48b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3CB371;
  }

  &:active {
    background-color: #375D45;
  }
`;