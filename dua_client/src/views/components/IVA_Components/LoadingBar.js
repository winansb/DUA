import React from "react";
import styled from "styled-components";

const LoadingBar = ({ progress }) => {
  const timeLeft = Math.floor(progress / 60);

  return (
    <LoadingBarContainer>
      <TimeCounter>
        <Time>{timeLeft}</Time>
        <MinLabel>min</MinLabel>
      </TimeCounter>
      <ProgressBar>
        <ProgressFill style={{ width: `${progress}%` }} />
      </ProgressBar>
    </LoadingBarContainer>
  );
};

const LoadingBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const ProgressBar = styled.div`
  margin: 85px 0px 0px -70px;

  background: linear-gradient(to right, #6ac1ff 0%, #0074e4 50%, #6ac1ff 100%);
  height: 45px;
  width: 100%;
  border: 4px solid #000;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: 23px;
  }
`;

const ProgressFill = styled.div`
  background-color: #3c3c3c;
  height: 100%;
  transition: width 250ms ease-out;
`;

const TimeCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 87px 10px -20px -20px;
  grid-column: 1;
`;

const Time = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #00000;
  transform: translateY(-10px);
`;

const MinLabel = styled.span`
  font-size: 26px;
  font-weight: normal;
  color: #00000;
  transform: translateY(-30px);
`;

export default LoadingBar;
