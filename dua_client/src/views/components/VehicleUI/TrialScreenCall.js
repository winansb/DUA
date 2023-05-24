import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import PhoneScreen from "../../../assets/PhoneScreen.png";
import PhoneCallEnd from "../../../assets/PhoneCallEnd.png";
import useTimeout from "./utils/useTimeout";

const popIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const popOut = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
`;

const TrialScreenCall = ({
  onClose,
  test,
  screens,
  setShowOverlay,
  trialType,
  setCurrentScreenIndex,
  displayTimeSeconds,
  nextIndex,
  screenName,
  videoWindow,
  dispatch,
}) => {
  const [closing, setClosing] = useState(false);
  const destination = useSelector((state) => state.destination);
  const travelTime = useSelector((state) => state.travelTime);

  const handleClose = async (nextIndex) => {
    setClosing(true);

    const actionName = screenName + "_ok";
    setTimeout(() => onClose(test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex, videoWindow, dispatch), 300);

  };

  useEffect(() => {
    return () => setClosing(false);
  }, []);

  // This handles changing screens when the Timeout happens
  const handleTimeout = () => {
    setClosing(true);
    console.log("handleTimeout: closing screen");
    const actionName = screenName + "_timeout";
    onClose(test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex, videoWindow, dispatch);
  };

  // This custom hook handles the timeout functionality
  useTimeout(handleTimeout, displayTimeSeconds);

  return (
    <StyledTrialScreen closing={closing}>
      <ContentContainer>
        <ImageWrapper>
          <Image src={PhoneScreen} alt="Detour" />
          <PhoneCallEndImage
            src={PhoneCallEnd}
            alt="Phone Call End"
            onClick={() => handleClose(nextIndex)}
          />
        </ImageWrapper>
        <TextWrapper>
          <TextBox>
            <SituationDescriptionTitle>
              Situation Description:
            </SituationDescriptionTitle>
            <SituationDescription>
              My vehicle detected a road blockage and we needed to take a
              detour.
            </SituationDescription>
          </TextBox>
          <TextBox>
            <TripInformationTitle>Trip Information:</TripInformationTitle>
            <TripInformation>
              <strong>Destination:</strong> {destination}
              <br />
              <br />
              <strong>Location:</strong> E University Avenue
              <br />
              <br />
              <strong>ETA:</strong> {travelTime}
            </TripInformation>
          </TextBox>
        </TextWrapper>
      </ContentContainer>
    </StyledTrialScreen>
  );
};

const StyledTrialScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: calc(100% - 40px);
  height: auto;
  max-height: calc(100% - 40px);
  background-color: #fff;
  border: 3px solid #3c3c3c;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  animation: ${({ closing }) => (closing ? popOut : popIn)} 0.3s ease-out;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const PhoneCallEndImage = styled.img`
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  width: 95px;
  height: 95px;
  object-fit: cover;
  cursor: pointer;
`;

const SituationDescription = styled.div`
  font-size: 1.4rem;
  margin-top: 20px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const TripInformation = styled.div`
  font-size: 1.4rem;
  margin-top: 20px;
  flex: 1;
  display: block;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;

const TextBox = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin: 50px 0px 50px 0px;
  height: 40%;
`;

const SituationDescriptionTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const TripInformationTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export default TrialScreenCall;
