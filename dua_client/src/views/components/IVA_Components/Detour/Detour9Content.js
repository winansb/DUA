import React, { useEffect } from "react";
import styled from "styled-components";

const Detour9Content = ({ mapImage }) => {
  return (
    <ContentContainer>
      <Header>You did not add any destination</Header>
      <Header>We will take the detour</Header>
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

export default Detour9Content;
