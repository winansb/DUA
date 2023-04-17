import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DefaultDisplay from "./DefaultDisplay";
import VehicleDate from "./VehicleDate";
import ButtonColumn from "./ButtonColumn";
import tvPic from "../../../assets/EntertainmentApp.png";
import twoPhones from "../../../assets/TwoPhones.png";
import phoneApp from "../../../assets/PhoneApp.png";
import carSettings from "../../../assets/CarSettings.png";
import TrialScreenInformation from "./TrialScreenInformation";
import TrialScreenPrompt from "./TrialScreenPrompt";
import TrialScreenNotif from "./TrailScreenNotif";
import { detourScreens, detourScreenTimes } from "./Detour/Detour";
import { breakdownScreens } from "./Breakdown/Breakdown";
import TrialScreenCall from "./TrialScreenCall";
import { setPaused } from "../../../redux/actions/trialActions";

const VehicleUI = (props) => {
  const {
    participant,
    column,
    test,
    videoWindow,
    targetOrigin,
    updateCurrentScreen,
  } = props;

  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const screens = column === 0 ? detourScreens : breakdownScreens;

  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.trial.isPaused);

  const handlePause = useCallback(() => {
    dispatch(setPaused(!isPaused));
    if (videoWindow) {
      videoWindow.postMessage(
        { action: isPaused ? "play" : "pause" },
        targetOrigin || "*"
      );
    }
  }, [isPaused, videoWindow, targetOrigin, dispatch]);

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
  }, [isPaused, videoWindow, targetOrigin, handlePause]);

  const handleScreenClose = (nextIndex) => {
    setShowOverlay(false);
    setCurrentScreenIndex(nextIndex);
    console.log(currentScreenIndex);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const buttonData = [
    {
      text: "Pair Your Device",
      imgSrc: twoPhones,
    },
    { text: "Entertainment", imgSrc: tvPic },
    { text: "Vehicle Setting", imgSrc: carSettings },
    { text: "Call", imgSrc: phoneApp },
  ];

  const handleHelpButtonClick = () => {
    setShowOverlay(!showOverlay);
  };
  const timesInSeconds = useMemo(() => [2, 4, 6], []);

  useEffect(() => {
    const timers = timesInSeconds.map((time) => {
      return setTimeout(() => {
        setShowOverlay(true);
      }, time * 1000);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [timesInSeconds]);

  const renderTrialScreen = () => {
    const currentScreen = screens[currentScreenIndex];

    if (!currentScreen) return null;

    switch (currentScreen.type) {
      case "Information":
        return (
          <TrialScreenInformation
            information={currentScreen.content}
            onClose={handleScreenClose}
            nextIndex={currentScreen.Ok}
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
        <HelpButton onClick={handleHelpButtonClick}>Help</HelpButton>
      </TopRight>
      <LargeLeft className={showOverlay ? "overlay-active" : ""}>
        <DefaultDisplay
          column={column}
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
