import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateParticipant } from "../../redux/actions/participantActions";
import DefaultDisplay from "../components/VehicleUI/DefaultDisplay";
import VehicleDate from "../components/VehicleUI/VehicleDate";
import ButtonColumn from "../components/VehicleUI/ButtonColumn";
import tvPic from "../../assets/EntertainmentApp.png";
import twoPhones from "../../assets/TwoPhones.png";
import phoneApp from "../../assets/PhoneApp.png";
import carSettings from "../../assets/CarSettings.png";
import TrialScreenInformation from "../components/VehicleUI/TrialScreenInformation";
import TrialScreenPrompt from "../components/VehicleUI/TrialScreenPrompt";
import TrialScreenNotif from "../components/VehicleUI/TrialScreenNotif";
import TrialScreenCall from "../components/VehicleUI/TrialScreenCall";
import { setPaused } from "../../redux/actions/trialActions";
import { createScreen, finishScreen } from "../../redux/actions/screenActions";
import { useNavigate } from "react-router-dom";

// Trial Videos Add new videos here to add to trial 
import Detour_Home from "../../assets/Detour_Home.mp4";
import Detour_Waffle_House from "../../assets/Detour_Waffle_House.mp4";
import Detour_Walgreen from "../../assets/Detour_Walgreen.mp4";
import Breakdown_Start from "../../assets/Breakdown_Breakdown.mp4";
import Breakdown_Not_Pull_Over from "../../assets/Breakdown_Not_Pull_Over.mp4";
import Breakdown_Pull_Over from "../../assets/Breakdown_Pull_Over.mp4";

// Trial Data structure
import trialDataArray from "../../data/TrialData";

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
    updateCurrentScreen,
    trialType,
  } = props;

  const [showOverlay, setShowOverlay] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.trial.isPaused);
  const destination = useSelector((state) => state.trial.destination);
  const navigate = useNavigate();

  // Counter timer logic
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  // Get the data based on the trialType
  const { screens, pauses, screenTimings } = useMemo(() => {
    if (trialType) {
      const trialData = trialDataArray.find((item) => item.trialType === trialType);

      if (trialData) {
        return {
          screens: trialData.screens,
          pauses: trialData.pauses,
          screenTimings: trialData.screenTimings,
        };
      } else {
        console.log(trialDataArray);
        console.error(`Invalid trialType: ${trialType}`);
        return { screens: [], pauses: [], screenTimings: {} };
      }
    }
  }, [trialType]);

  const handlePause = useCallback(() => {
    dispatch(setPaused(!isPaused));
  }, [dispatch, isPaused]);

  useEffect(() => {
    const seconds = counter / 1000;
  
    if (pauses.includes(seconds)) {
      dispatch(setPaused((prevState) => !prevState));
    }
  
    if (Object.keys(screenTimings).includes(String(seconds))) {
      const targetScreenIndex = screenTimings[seconds];
  
      if (currentScreenIndex === targetScreenIndex && !showOverlay) {
        setShowOverlay(true);
  
        // Send screen open information to the database
        const newScreen = {
          SCREEN_NUMBER_IN_ORDER: targetScreenIndex,
          LOCAL_TIME_AT_START: new Date().toLocaleString(),
          TRIAL_RUNTIME_AT_START_SECONDS: counter / 1000,
          SCREEN_NAME: screens[targetScreenIndex].screenName,
          TRIAL_ID: test.UID,
          VIDEO_PLAYING: column === 0 ? "Detour_Start" : "Breakdown_Start",
          VIDEO_TIME_AT_START_SECONDS: counter,
        };
        dispatch(createScreen(newScreen));
      }
    }
  }, [dispatch, counter, currentScreenIndex, showOverlay]);

  useEffect(() => {
    if (videoWindow) {
      videoWindow.postMessage(
        { action: isPaused ? "pause" : "play" },
        targetOrigin || "*"
      );
    }
  }, [isPaused, targetOrigin, videoWindow]);


  // Destination Changing Logic! Add new videos here to add to the trial
  useEffect(() => {
    if (destination) {
      console.log(destination);

      const videoSrcMap = {
        walgreens: Detour_Walgreen,
        walgreensDetour: Detour_Walgreen,
        waffleHouse: Detour_Waffle_House,
        home: Detour_Home,

        breakdown: Breakdown_Start,
        breakdownPullOver: Breakdown_Pull_Over,
        breakdownNotPullOver: Breakdown_Not_Pull_Over,
      };

      const finalVideoSrc = videoSrcMap[destination];

      if (!finalVideoSrc) {
        console.warn(`Unknown destination: ${destination}`);
        return;
      }

      videoWindow.postMessage(
        {
          action: "setFinalVideo",
          finalVideo: finalVideoSrc,
        },
        targetOrigin || "*"
      );
    }
  }, [destination]);

  // Listen for the end of the trial and close down the trial
  
  function updateParticipantComplete(participant) {
    const upperCaseTrialType = trialType.toUpperCase();
    participant[`${upperCaseTrialType}_COMPLETE`] = true;
    participant[`${upperCaseTrialType}_IN_PROGRESS`] = false;
    return participant;
  }

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.action === "finalVideoEnded") {
        const updatedParticipant = updateParticipantComplete(participant);
        dispatch(updateParticipant(updatedParticipant.UID, updatedParticipant));
        navigate("/ThankYou");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch, participant]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        handlePause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePause]);

  const handleScreenClose = (nextIndex) => {
    setShowOverlay(false);
    setCurrentScreenIndex(nextIndex);
  
    // Send screen close information to the database
    const closingScreen = {
      SCREEN_NUMBER_IN_ORDER: currentScreenIndex,
      LOCAL_TIME_AT_CLOSE: new Date().toLocaleString(),
      TRIAL_RUNTIME_AT_CLOSE_SECONDS: counter / 1000,
      TRIAL_ID: test.UID,
      VIDEO_PLAYING: column === 0 ? "Detour_Start" : "Breakdown_Start",
      VIDEO_TIME_AT_CLOSE_SECONDS: counter,
    };
    dispatch(finishScreen(closingScreen));
  };

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

  const renderTrialScreen = () => {
    const currentScreen = screens[currentScreenIndex];

    if (!currentScreen) return null;

    switch (currentScreen.type) {
      case "Information":
        return (
          <TrialScreenInformation
            information={currentScreen.content}
            onClose={handleScreenClose}
            nextIndex={currentScreen.nextIndex}
            videoWindow={videoWindow}
            targetOrigin={targetOrigin}
            screenName={currentScreen.screenName}
            displayTimeSeconds={currentScreen.displayTimeSeconds}
          />
        );
      case "Prompt":
        return (
          <TrialScreenPrompt
            contents={currentScreen.content}
            onClose={handleScreenClose}
            videoWindow={videoWindow}
            targetOrigin={targetOrigin}
            screenName={currentScreen.screenName}
            displayTimeSeconds={currentScreen.displayTimeSeconds}
            yesIndex={currentScreen.yesIndex}
            noIndex={currentScreen.noIndex}
            yesDestination={currentScreen.yesDestination}
          />
        );
      case "Notif":
        return (
          <TrialScreenNotif
            contents={currentScreen.content}
            onClose={handleScreenClose}
            videoWindow={videoWindow}
            targetOrigin={targetOrigin}
            screenName={currentScreen.screenName}
            displayTimeSeconds={currentScreen.displayTimeSeconds}
            nextIndex={currentScreen.nextIndex}
            okDestination={currentScreen.okDestination}
          />
        );
      case "Call":
        return (
          <TrialScreenCall
            onClose={handleScreenClose}
            videoWindow={videoWindow}
            targetOrigin={targetOrigin}
            screenName={currentScreen.screenName}
            displayTimeSeconds={currentScreen.displayTimeSeconds}
            nextIndex={currentScreen.nextIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Grid>
      <TopLeft>
        <VehicleDate />
      </TopLeft>
      <TopRight>
      {/* onClick={handleHelpButtonClick} */}
        <HelpButton >Help</HelpButton>
      </TopRight>
      <LargeLeft className={showOverlay ? "overlay-active" : ""}>
        <DefaultDisplay
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
        />
        {showOverlay && renderTrialScreen()}
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
