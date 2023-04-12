import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { createTap } from '../../redux/actions/tapActions';

function Trial({ participant, column, test, children, videoWindow, targetOrigin }) {

  const screenTapCounter = useRef(1);
  const [currentScreenName, setCurrentScreenName] = useState("");
  const [screenSequence, setScreenSequence] = useState([]);
  const trialStartTime = useRef(null);
  const dispatch = useDispatch(); 

  const updateCurrentScreen = (screenName) => {
    setCurrentScreenName(screenName);
    setScreenSequence((prevSequence) => [...prevSequence, screenName]);
  };

  const playVideo = () => {
    videoWindow.postMessage({ action: "play" }, targetOrigin);
  };

  const pauseVideo = () => {
    videoWindow.postMessage({ action: "pause" }, targetOrigin);
  };

  const setFinalVideo = (finalVideo) => {
    videoWindow.postMessage({ action: "setFinalVideo", finalVideo }, targetOrigin);
  };

  const setVideo = (video) => {
    videoWindow.postMessage({ action: "setVideo", video }, targetOrigin);
  };

  const setTime = (time) => {
    videoWindow.postMessage({ action: "setTime", time }, targetOrigin);
  };

  const handleClick = (e) => {
    const tap_on_screen_number = screenTapCounter.current;
    const screen_name = currentScreenName; 
    const screen_seq = screenSequence.join(','); 
    const trial_runtime_ms = Date.now() - trialStartTime.current; 
    const press_start = new Date().toISOString();
    const press_end = new Date().toISOString();
    const press_duration_ms = 0; 
    const action_initiated = '';

  
    const tapData = {
      TRIAL_ID: test.UID,
      TAP_ON_SCREEN_NUMBER: tap_on_screen_number,
      SCREEN_NAME: screen_name,
      SCREEN_SEQ: screen_seq,
      TRIAL_RUNTIME_MS: trial_runtime_ms,
      PRESS_START: press_start,
      PRESS_END: press_end,
      PRESS_DURATION_MS: press_duration_ms,
      ACTION_INITIATED: action_initiated,
    };
  
    console.log(tapData);
    //dispatch(createTap(tapData));
  
    screenTapCounter.current++;
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick); 
      };
  }, []); 
  

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
        })
      )}
    </>
  );
}

export default Trial;