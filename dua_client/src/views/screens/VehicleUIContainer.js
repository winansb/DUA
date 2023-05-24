import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DefaultDisplay from "../components/VehicleUI/DefaultDisplay";
import VehicleDate from "../components/VehicleUI/VehicleDate";
import ButtonColumn from "../components/VehicleUI/ButtonColumn";
import tvPic from "../../assets/EntertainmentApp.png";
import twoPhones from "../../assets/TwoPhones.png";
import phoneApp from "../../assets/PhoneApp.png";
import carSettings from "../../assets/CarSettings.png";
import TrialScreenRenderer from "../components/VehicleUI/utils/TrialScreenRenderer";

// Trial Data structure
import trialDataArray from "../../data/TrialData";

// util functions 
import { handleScreenTransition } from '../components/VehicleUI/utils/handleScreenTransition';
import { useScreenCloser } from "../components/VehicleUI/utils/useScreenCloser";
import { extractTrialData } from "../components/VehicleUI/utils/trialDataExtractor";
import { useTrialScheduler } from "../components/VehicleUI/utils/useTrialScheduler";
import { useDestinationHandler } from "../components/VehicleUI/utils/useDestinationHandler";
import { useParticipantHandler } from "../components/VehicleUI/utils/useParticipantHandler";

// use this to change startings screen save name to server
const defaultUI = "DefaultUI";
// use this to change the name of the action that starts the trial
const trialStartAction = "Trial_Begin";

const buttonData = [
  {
    text: "Pair Your Device",
    imgSrc: twoPhones,
  },
  { text: "Entertainment", imgSrc: tvPic },
  { text: "Vehicle Setting", imgSrc: carSettings },
  { text: "Call", imgSrc: phoneApp },
];


// This vehicleUI container is responsible for rendering the vehicle UI and calling all of the hooks that are responsible for the logic of the trial

const VehicleUI = (props) => {
  const {
    participant,
    column,
    test,
    videoWindow,
    targetOrigin,
    trialType,
  } = props;
  
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const destination = useSelector((state) => state.trial.destination);  
  const isPaused = useSelector((state) => state.trial.isPaused);  

  // Get the data, based on the trialType, from the trialDataArray
  const { screens, screenTimings, pauses } = useMemo(() => extractTrialData(trialType, trialDataArray), [trialType]);

  // This TrialScheduler sets timers for all pauses and screens that are scheduled to open during a trial. These are based on the trialData array.
  // The TrialScheduler also handles pausing the timer's whenever the system isPaused. 
  useTrialScheduler(currentScreenIndex, showOverlay, setShowOverlay, screens, test, column, screenTimings, pauses, videoWindow, targetOrigin);

  // Destination Changing Logic! Add new videos here to add to the trial
  useDestinationHandler(destination, videoWindow, targetOrigin);

  // The participant handler is responsible for updating the participant object in the database
  // This code also navigates the user to the thank you page when their trial is done.
  useParticipantHandler(trialType, participant, videoWindow, test);


  const handleHelpButtonClick = () => {
    setShowOverlay(!showOverlay);
  };

  // This useEffect is responsible for disabling scrolling from the trial
  // it also provides the reload effect when opening a trial 
  useEffect(() => {

    handleScreenTransition('start', test, trialStartAction, defaultUI, videoWindow, dispatch);

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // This useEffect is responsible for pausing and playing the video when the isPaused state changes
  useEffect(() => {

    if (videoWindow) {
      const action = isPaused ? 'pause' : 'play';
      videoWindow.postMessage(
        { action },
        targetOrigin || "*"
      );
    }
  }, [videoWindow, targetOrigin, isPaused]);
  


  // This return statement lays out the overview of the Vehicle UI. This is where you would begin to edit
  // the overarching look of the interface.
  // Currently I am passing functions into the TrialScreenRenderer which get passed to each type 
  // of screen to provide them with their functionality. This provides the complex logic for switching screens
  // which can be found in the screenCloser.js file. This method is known as prop drilling and is not ideal. 
  // To update it would require a refactor of this file, the trialRenderer and the invididual screen components.
  return (
    <Grid>
      <TopLeft>
        <VehicleDate />
      </TopLeft>
      <TopRight>
      {/* onClick={handleHelpButtonClick} */}
        <HelpButton onClick={handleHelpButtonClick}>Help</HelpButton>
      </TopRight>
      <LargeLeft className={showOverlay ? "overlay-active" : ""}>
        <DefaultDisplay
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
        />
        {showOverlay && <TrialScreenRenderer test= {test} screens={screens} setShowOverlay={setShowOverlay} trialType={trialType} setCurrentScreenIndex={setCurrentScreenIndex} currentScreen={screens[currentScreenIndex]} useScreenCloser={useScreenCloser} videoWindow={videoWindow} targetOrigin={targetOrigin} dispatch={dispatch} />}
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
`;

const LargeLeft = styled(Box)`
  grid-column: 1 / span 3;
  grid-row: 1 / span 5;
  margin: 20px 35px 40px 20px;
  height: 80%;
  align-self: end;
  position: relative;

  &.overlay-active {
    pointer-events: none;
  }

  &.overlay-active > * {
    pointer-events: none;
  }

  &.overlay-active > *:last-child {
    pointer-events: auto;
  }
`;

const LargeRight = styled(Box)`
  grid-column: 4;
  grid-row: 1 / span 5;
  height: 80%;
  margin: 20px 30px 40px 10px;
  align-self: end;
`;

export default VehicleUI;
