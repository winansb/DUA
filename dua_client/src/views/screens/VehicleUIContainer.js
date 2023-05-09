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
import { handleScreenClose } from "../components/VehicleUI/utils/screenCloser";
import { extractTrialData } from "../components/VehicleUI/utils/trialDataExtractor";
import { useTrialScheduler } from "../components/VehicleUI/utils/useTrialScheduler";
import { useDestinationHandler } from "../components/VehicleUI/utils/useDestinationHandler";
import { useParticipantHandler } from "../components/VehicleUI/utils/useParticipantHandler";


const buttonData = [
  {
    text: "Pair Your Device",
    imgSrc: twoPhones,
  },
  { text: "Entertainment", imgSrc: tvPic },
  { text: "Vehicle Setting", imgSrc: carSettings },
  { text: "Call", imgSrc: phoneApp },
];

const VehicleUI = (props) => {
  const {
    participant,
    column,
    test,
    videoWindow,
    targetOrigin,
    trialType,
  } = props;

  const [showOverlay, setShowOverlay] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const destination = useSelector((state) => state.trial.destination);

  // Get the data, based on the trialType, from the trialDataArray
  const { screens, screenTimings, pauses } = useMemo(() => extractTrialData(trialType, trialDataArray), [trialType]);

  // Feed this data into the trialScheduler 
  useTrialScheduler(currentScreenIndex, showOverlay, setShowOverlay, screens, test, column, screenTimings, pauses);

  // Destination Changing Logic! Add new videos here to add to the trial
  useDestinationHandler(destination, videoWindow, targetOrigin);

  // The participant handler is responsible for updating the participant object in the database
  useParticipantHandler(trialType, participant);


  const handleHelpButtonClick = () => {
    setShowOverlay(!showOverlay);
  };

  // DOM manipulation 
  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log(test);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // logic to determine if a screen should be shown or not
  // const shouldShowScreen = (screenName) => {
  //   const question = test.preTrialQuestions.find(
  //     (q) => q.impact.screenName === screenName
  //   );
  
  //   if (!question) return true;
  
  //   const serverName = question.serverName;
  //   const result = test[serverName];
  
  //   return impact ? impact.impact.show : true;
  // };

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
        {showOverlay && <TrialScreenRenderer currentScreen={screens[currentScreenIndex]} handleScreenClose={handleScreenClose} videoWindow={videoWindow} targetOrigin={targetOrigin} />}
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
