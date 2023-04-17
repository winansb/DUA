import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TripTravelTime = (videoWindow, targetOrigin) => {
  const travelTime = useSelector((state) => state.trial.travelTime);
  const [remainingTime, setRemainingTime] = useState(travelTime);
  const [eta, setEta] = useState(null);

  const isPaused = useSelector((state) => state.trial.isPaused);

  useEffect(() => {
    setRemainingTime(travelTime);
  }, [travelTime]);

  useEffect(() => {
    if (videoWindow && videoWindow.videoWindow) {
      videoWindow.videoWindow.postMessage(
        { action: "getTimeRemaining" },
        targetOrigin || "*"
      );
    }
  }, [videoWindow, targetOrigin, isPaused]);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.action === "receiveTimeRemaining") {
        const timeRemainingSeconds = e.data.timeRemaining;
        setRemainingTime(Math.floor(timeRemainingSeconds / 60));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    const updateEta = () => {
      const now = new Date();
      const etaDate = new Date(now.getTime() + remainingTime * 60000);
      setEta(
        etaDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateEta();

    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) =>
        Math.max(prevRemainingTime - 1, 0)
      );
      updateEta();
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  return (
    <TripTravelTimeContainer>
      <TimeBox>
        <TimeLabel>Travel Time</TimeLabel>
        <TimeValue>{remainingTime ? `${remainingTime} min` : "--"}</TimeValue>
      </TimeBox>
      <TimeBox>
        <TimeLabel>ETA</TimeLabel>
        <TimeValue>{eta ? eta : "--"}</TimeValue>
      </TimeBox>
    </TripTravelTimeContainer>
  );
};

const TripTravelTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  background-color: #f3f3f3;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TimeLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TimeValue = styled.span`
  font-size: 1.5rem;
`;

export default TripTravelTime;
