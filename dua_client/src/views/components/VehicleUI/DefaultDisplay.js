import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TripTravelTime from "./TripTravelTime";
import { setMap } from "../../../redux/actions/trialActions";

import Start from "../../../assets/StartMap.png";
import Detour from "../../../assets/DetourMap.png";
import waffleHouse from "../../../assets/WaffleHouseMap.png";
import home from "../../../assets/HomeMap.png";

const DefaultDisplay = ({ videoWindow, targetOrigin }) => {
  const destination = useSelector((state) => state.trial.destination);

  const [map, setMap] = useState(Start);

  useEffect(() => {
    let newMap;
    switch (destination) {
      case "walgreens":
        newMap = Start;
        break;
      case "walgreensDetour":
        newMap = Detour;
        break;
      case "waffleHouse":
        newMap = waffleHouse;
        break;
      case "home":
        newMap = home;
        break;
      default:
    }
    if (destination) {
      setMap(newMap);
    }
  }, [destination]);

  return (
    <DefaultDisplayContainer>
      <ChangeDestinationButton>Change Destination</ChangeDestinationButton>
      <TripTravelTime videoWindow={videoWindow} targetOrigin={targetOrigin} />
      <MapPlaceholder>
        <MapImage src={map} alt="Map" />
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
  width: 1300px;
  height: 800px;
  object-fit: contain;
  padding: 1px;
  box-sizing: border-box;
  margin: -20px 0px 0px 20px;

  transform: scale(0.8);
`;

export default DefaultDisplay;
