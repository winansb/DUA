import React, { useEffect } from "react";
import styled from "styled-components";

const Detour5Content = ({ arrivalTime, mapImage }) => {
  return (
    <ContentContainer>
      <Header>Your next destination is Waffle house</Header>
      <Header>You will arrive there at {arrivalTime}</Header>
      <MapImage src={mapImage} alt="Map" />
      <Question>Would you like to skip to your next destination?</Question>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin: 10px 0px 5px 0px;
`;

const MapImage = styled.img`
  max-width: 60%;
  margin-bottom: 20px;
  border: solid black;
  padding: 2px;
`;

const Question = styled.p`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

export default Detour5Content;
