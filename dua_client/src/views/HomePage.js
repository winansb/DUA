import React from 'react';
import NavButton from './components/NavButton';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to DUA!</Title>
      <Buttons>
        <NavButton text="Trial Setup" link="/trial-setup" />
        <NavButton text="Export to .csv" link="/export-csv" />
        <NavButton text="Device GUI" link="/device-gui" />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 7rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  & > * {
    margin-bottom: 3rem;
    width: 20rem;
    height: 5rem;
    font-size: 1.5rem;
  }
`;

export default HomePage;