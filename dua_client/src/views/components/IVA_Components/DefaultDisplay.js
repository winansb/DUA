import React, { useState } from "react";
import styled from "styled-components";
import LoadingBar from "./LoadingBar";
import InteractiveMap from "./InteractiveMap";
import StartMap from "../../../assets/StartMap.png";
import {
  LoadScript,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";

const DefaultDisplay = ({ progress }) => {
  const [destination, setDestination] = useState("walgreens");
  const [initialState, setInitialState] = useState(false);

  const start = { lat: 29.650403572190747, lng: -82.32777847159345 };
  const walgreens = { lat: 29.6523949205675, lng: -82.31037812040371 };
  const se2ndAve = { lat: 29.65026820968115, lng: -82.32071654536153 };
  const se9thSt = { lat: 29.650261462931873, lng: -82.31337358849125 };
  const se12thSt = { lat: 29.650267583965768, lng: -82.31010087551493 };
  const waffleHouse = { lat: 29.651624298156644, lng: -82.3141755799864 };
  const home = { lat: 29.65058506018099, lng: -82.32743350189087 };

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

  const toggleDetour = () => {
    setInitialState(!initialState);
  };

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const handleApiLoaded = (map) => {
    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin: start,
      destination:
        destination === "walgreens"
          ? walgreens
          : destination === "waffleHouse"
          ? waffleHouse
          : home,
      travelMode: window.google.maps.TravelMode.DRIVING,
      waypoints: setWaypoints(initialState),
      optimizeWaypoints: true,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        const directions = result;
        const renderer = new window.google.maps.DirectionsRenderer();
        renderer.setDirections(directions);
        renderer.setMap(map);
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  };

  const setWaypoints = (initialState) => {
    if (initialState) {
      return [
        {
          location: se12thSt,
          stopover: true,
        },
      ];
    } else {
      return [
        {
          location: se2ndAve,
          stopover: true,
        },
        {
          location: se9thSt,
          stopover: true,
        },
      ];
    }
  };

  return (
    <DefaultDisplayContainer>
      <ChangeDestinationButton onClick={goToWalgreens}>
        Change Destination
      </ChangeDestinationButton>
      {/* <ChangeDestinationButton onClick={goToWaffleHouse}>
        Waffle House
      </ChangeDestinationButton>
      <ChangeDestinationButton onClick={goToHome}>Home</ChangeDestinationButton> */}
      {/* <ChangeDestinationButton onClick={toggleDetour}>
        {initialState ? "Remove Detour" : "Add Detour"}
      </ChangeDestinationButton> */}
      <LoadingBarContainer>
        <LoadingBar progress={progress} />
      </LoadingBarContainer>
      <MapPlaceholder>
        {/* <LoadScript
          googleMapsApiKey={API_KEY}
          onLoad={() => handleApiLoaded(map)}
        >
          <InteractiveMap
            destination={destination}
            initialState={initialState}
          />
        </LoadScript> */}
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
  margin: 60px 10px 10px 40px;
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

const LoadingBarContainer = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1;
  width: 100%;
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
