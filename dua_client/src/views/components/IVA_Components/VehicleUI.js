import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DefaultDisplay from "./DefaultDisplay";
import VehicleDate from "./VehicleDate";
import ButtonColumn from "./ButtonColumn";
import tvPic from "../../../assets/EntertainmentApp.png";
import twoPhones from "../../../assets/TwoPhones.png";
import phoneApp from "../../../assets/PhoneApp.png";
import carSettings from "../../../assets/CarSettings.png";

const VehicleUI = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const buttonData = [
    { text: "Pair Your Device", imgSrc: twoPhones },
    { text: "Entertainment", imgSrc: tvPic },
    { text: "Vehicle Setting", imgSrc: carSettings },
    { text: "Call", imgSrc: phoneApp },
  ];

  return (
    <Grid>
      <TopLeft>
        <VehicleDate />
      </TopLeft>
      <TopRight>
        <HelpButton>Help</HelpButton>
      </TopRight>
      <LargeLeft>
        <DefaultDisplay progress={progress} />
      </LargeLeft>
      <LargeRight>
        <ButtonColumn buttonData={buttonData} />
      </LargeRight>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100vh;
  background-color: #3c3c3c;
`;

const TopLeft = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const TopRight = styled.div`
  grid-column: 4;
  grid-row: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
`;

const HelpButton = styled.button`
  grid-column: 4;
  grid-row: 1;
  align-self: center;
  background-color: #ff4d4d;
  color: #fff;
  padding: 30px 0;
  border-radius: 8px;
  font-size: 36px;
  cursor: pointer;
  border: none;
  transition: transform 250ms;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 100%;
  box-sizing: border-box;

  &:hover,
  &:focus-visible {
    background-color: #ff8080;
    transform: translateY(0.15rem);
    transition: transform 250ms;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  transition: transform 250ms;

  &:hover,
  &:focus-visible {
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(0.15rem);
    transition: transform 500ms;
  }
`;

const LargeLeft = styled(Box)`
  grid-column: 1 / span 3;
  grid-row: 1 / span 5;

  margin: 20px 35px 40px 20px;
  height: 80%;
  align-self: end;
`;

const LargeRight = styled(Box)`
  grid-column: 4;
  grid-row: 1 / span 5;
  height: 80%;
  margin: 20px 30px 40px 10px;
  align-self: end;
`;

export default VehicleUI;
