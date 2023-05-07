import React, { useEffect } from "react";
import styled from "styled-components";

const Detour6Content = ({ arrivalTime, mapImage }) => {
  return (
    <ContentContainer>
      <Header>We are heading to Waffle House</Header>
      <MapImage src={mapImage} alt="Map" />
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
  margin: 10px 0px 15px 0px;
`;

const MapImage = styled.img`
  max-width: 60%;
  margin-bottom: 20px;
  border: solid black;
  padding: 2px;
`;

export default Detour6Content;
