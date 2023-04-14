import React from 'react';
import styled from 'styled-components';

const ButtonColumn = ({ buttonData }) => {
  return (
    <ButtonColumnContainer>
      {buttonData.map(({ text, imgSrc }, index) => (
        <Button key={index}>
          <ButtonImg src={imgSrc} alt={text} />
          <ButtonText>{text}</ButtonText>
        </Button>
      ))}
    </ButtonColumnContainer>
  );
};

const ButtonColumnContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 80px;
  justify-items: center;
  padding: 25% 0;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100px;
  border: 2px solid #000;
  background-color: #ffffff;
  color: #3c3c3c;
  font-size: 24px;
  cursor: pointer;
  transition: transform 250ms;
  border-radius: 35px;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  &:hover {
    transform: translateY(-0.15rem);
  }
`;

const ButtonImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const ButtonText = styled.span``;

export default ButtonColumn;