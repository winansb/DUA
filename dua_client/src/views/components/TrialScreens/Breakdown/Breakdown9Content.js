import React, { useEffect } from "react";
import styled from "styled-components";

const Detour7Content = ({}) => {
  return (
    <ContentContainer>
      <Question>Would you like to listen to relaxing music?</Question>
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

const Question = styled.p`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

export default Detour7Content;
