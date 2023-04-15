import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createTap, updateTap } from "../../redux/actions/tapActions";

function Trial({
  participant,
  column,
  test,
  children,
  videoWindow,
  targetOrigin,
}) {
  const [currentTargetOrigin, setCurrentTargetOrigin] = useState(targetOrigin);

  const screenTapCounter = useRef(1);
  const [currentScreenName, setCurrentScreenName] = useState("");
  const [screenSequence, setScreenSequence] = useState([]);
  const trialStartTime = useRef(null);
  const [touchStartEvent, setTouchStartEvent] = useState(null);
  const [actionInitiated, setActionInitiated] = useState("");
  const touchStartTime = useRef(null);
  const dispatch = useDispatch();

  const handleTouchStart = () => {
    touchStartTime.current = Date.now();
  };

  const updateCurrentScreen = (screenName) => {
    setCurrentScreenName(screenName);
    setScreenSequence((prevSequence) => [...prevSequence, screenName]);
  };

  const playVideo = () => {
    if (currentTargetOrigin) {
      videoWindow.postMessage({ action: "play" }, targetOrigin);
    }
  };

  const pauseVideo = () => {
    if (currentTargetOrigin) {
      videoWindow.postMessage({ action: "pause" }, targetOrigin);
    }
  };

  const setFinalVideo = (finalVideo) => {
    if (currentTargetOrigin) {
      videoWindow.postMessage(
        { action: "setFinalVideo", finalVideo },
        targetOrigin
      );
    }
  };

  const setVideo = (video) => {
    if (currentTargetOrigin) {
      videoWindow.postMessage({ action: "setVideo", video }, targetOrigin);
    }
  };

  const setTime = (time) => {
    if (currentTargetOrigin) {
      videoWindow.postMessage({ action: "setTime", time }, targetOrigin);
    }
  };

  const handleTouchEnd = (e) => {
    const press_end = Date.now();
    const press_duration_ms = press_end - touchStartTime.current;

    const tap_on_screen_number = screenTapCounter.current;
    const screen_name = currentScreenName;
    const screen_seq = screenSequence.join(",");
    const trial_runtime_ms = Date.now() - trialStartTime.current;

    const x = e.changedTouches[0].clientX;
    const y = e.changedTouches[0].clientY;

    const tapData = {
      TRIAL_ID: test.UID,
      TAP_ON_SCREEN_NUMBER: tap_on_screen_number,
      SCREEN_NAME: screen_name,
      SCREEN_SEQ: screen_seq,
      TRIAL_RUNTIME_MS: trial_runtime_ms,
      PRESS_START: new Date(touchStartTime.current).toISOString(),
      PRESS_END: new Date(press_end).toISOString(),
      PRESS_DURATION_MS: press_duration_ms,
      ACTION_INITIATED: actionInitiated,
      PRESS_LOCATION_X_PIXELS: x,
      PRESS_LOCATION_Y_PIXELS: y,
    };

    console.log(tapData);
    //dispatch(createTap(tapData));

    screenTapCounter.current++;
  };

  useEffect(() => {
    trialStartTime.current = Date.now();
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartEvent]);

  useEffect(() => {
    const handleButtonClicked = (e) => {
      setActionInitiated(e.detail);
    };

    window.addEventListener("buttonClicked", handleButtonClicked);

    return () => {
      window.removeEventListener("buttonClicked", handleButtonClicked);
    };
  }, []);

  useEffect(() => {
    if (actionInitiated !== "") {
      setActionInitiated("");
    }
  }, [actionInitiated]);

  useEffect(() => {
    setCurrentTargetOrigin(targetOrigin);
  }, [targetOrigin]);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          playVideo,
          pauseVideo,
          setFinalVideo,
          setVideo,
          setTime,
          videoWindow,
          targetOrigin,
          updateCurrentScreen,
          participant,
          test,
          column,
          actionInitiated,
          setActionInitiated,
        })
      )}
    </>
  );
}

export default Trial;
