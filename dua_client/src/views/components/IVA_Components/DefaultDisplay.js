import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TripTravelTime from "./TripTravelTime";
import InteractiveMap from "./InteractiveMap";
import StartMap from "../../../assets/StartMap.png";

const DefaultDisplay = ({ videoWindow, targetOrigin }) => {
  const [destination, setDestination] = useState("walgreens");
  const [initialState, setInitialState] = useState(false);

  const goToWalgreens = () => {
    setDestination("walgreens");
    setInitialState(false);
  };

  const goToWaffleHouse = () => {
    setDestination("waffleHouse");
  };

  const goToHome = () => {
    setDestination("home");
  };

  return (
    <DefaultDisplayContainer>
      <ChangeDestinationButton>Change Destination</ChangeDestinationButton>
      <TripTravelTime videoWindow={videoWindow} targetOrigin={targetOrigin} />
      <MapPlaceholder>
        <MapImage src={StartMap} alt="Start Map" />
      </MapPlaceholder>
    </DefaultDisplayContainer>
  );
};

const DefaultDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const ChangeDestinationButton = styled.button`
  grid-columnn: 1;
  grid-row: 1;
  margin: 60px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
  transition: transform 250ms, background-color 250ms, box-shadow 250ms;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus-visible {
    background-color: #f0f0f0;
    transform: translateY(0.05rem);
    transition: transform 250ms, background-color 250ms, box-shadow 250ms;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.05);
  }
`;

const MapPlaceholder = styled.div`
  grid-column: 1 / span 3;
  grid-row: 2;
`;

const MapImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 1px solid #000;
  padding: 1px;
  box-sizing: border-box;
  margin-left: -20px;

  transform: scale(0.8);
`;

export default DefaultDisplay;
