// Handle screen transition actions: 
  // start: create a new screen
  // continue: Finish the last screen and create a new one
  // end: Finish the last screen

    // const closingScreen = {
  //   SCREEN_NUMBER_IN_ORDER: currentScreenIndex,
  //   LOCAL_TIME_AT_CLOSE: new Date().toLocaleString(),
  //   TRIAL_RUNTIME_AT_CLOSE_SECONDS: counter / 1000,
  //   TRIAL_ID: test.UID,
  //   VIDEO_PLAYING: column === 0 ? "Detour_Start" : "Breakdown_Start",
  //   VIDEO_TIME_AT_CLOSE_SECONDS: counter,
  // };
  // const openingScreen = {
  //   SCREEN_NUMBER_IN_ORDER: currentScreenIndex,
  //   LOCAL_TIME_AT_CLOSE: new Date().toLocaleString(),
  //   TRIAL_RUNTIME_AT_CLOSE_SECONDS: counter / 1000,
  //   TRIAL_ID: test.UID,
  //   VIDEO_PLAYING: column === 0 ? "Detour_Start" : "Breakdown_Start",
  //   VIDEO_TIME_AT_CLOSE_SECONDS: counter,
  // };

import { postMessageWithResponse } from '../../../../controllers/videoWindowController';
import { createScreen, finishScreen } from '../../../../redux/actions/screenActions';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // Ignore write errors.
  }
};
export const handleScreenTransition = async (option, test, actionName, screenName, videoWindow, dispatch) => {
  // Load previous screens from local storage
  let state = loadState();
  console.log('Initial state from local storage:', state);

  if (!state) {
    state = {};
  }

  const trialId = test.UID;
  if (!state[trialId]) {
    state[trialId] = [];
  }
  let previousScreen = state[trialId].length > 0 ? state[trialId][state[trialId].length - 1] : null;
  console.log('Previous screen:', previousScreen);

  let videoTimeStart = 0;
  let videoTimeEnd = 0;
  let screenDuration = 0;
  let videoPlaying = "";

  // Request video details
  if (videoWindow && videoWindow.videoWindow) {
    const currentTimeData = await postMessageWithResponse(videoWindow.videoWindow, { action: 'getCurrentTime' });
    const currentVideoData = await postMessageWithResponse(videoWindow.videoWindow, { action: 'getCurrentVideo' });
    const timeRemainingData = await postMessageWithResponse(videoWindow.videoWindow, { action: 'getTimeRemaining' });

    videoTimeStart = currentTimeData.currentTime;
    videoPlaying = currentVideoData.currentVideo;
    videoTimeEnd = videoTimeStart + timeRemainingData.timeRemaining;
    screenDuration = timeRemainingData.timeRemaining;
  }

  // Update screen details based on response from video window
  window.addEventListener('message', (event) => {
    if (event.data.action === 'receiveTimeRemaining') {
      return; // Ignore this message
    }

    console.log('Received message from video window:', event.data.action, event.data);
  
    if (event.data.action === 'receiveCurrentTime') {
      videoTimeStart = event.data.currentTime;
    }
    if (event.data.action === 'receiveCurrentVideo') {
      videoPlaying = event.data.currentVideo;
    }
    if (event.data.action === 'receiveTimeRemaining') {
      videoTimeEnd = videoTimeStart + event.data.timeRemaining;
      screenDuration = event.data.timeRemaining;
    }
  });

  if (option === 'start' || option === 'continue') {
    const newScreen = {
      SCREEN_NUMBER_IN_ORDER: previousScreen ? previousScreen.SCREEN_NUMBER_IN_ORDER + 1 : 1,
      LOCAL_TIME_AT_START: new Date().toLocaleString(),
      TRIAL_RUNTIME_AT_START_SECONDS: videoTimeStart,
      SCREEN_NAME: screenName,
      TRIAL_ID: trialId,
      VIDEO_PLAYING: videoPlaying,
      VIDEO_TIME_AT_START_SECONDS: videoTimeStart,
    };
  
    console.log('New screen:', newScreen);
  
    try {
      const response = await dispatch(createScreen(newScreen));
      console.log('Response from create screen:', response.data)
      newScreen.UID = response.data.UID;
      state[trialId].push(newScreen);
    } catch (error) {
      console.log('Error creating screen:', error);
    }
  }

  if (option === 'continue' || option === 'end') {
    if (previousScreen && previousScreen.UID) {
      const finishedScreen = {
        UID: previousScreen.UID,
        SCREEN_DURATION_SECONDS: screenDuration,
        EXIT_METHOD: actionName,
        VIDEO_TIME_AT_END: videoTimeEnd,
      };
  
      console.log('Finished screen:', finishedScreen);
  
      try {
        const response = await dispatch(finishScreen(finishedScreen.UID, finishedScreen));
        
        console.log('Finished screen server response:', response.data);

        state[trialId][state[trialId].length - 1] = response.data;
      } catch (error) {
        console.log('Error finishing screen:', error);
      }
    } else {
      console.log('Cannot update screen: previous screen is not defined or does not have a UID');
    }
  }

  // If the trial has ended, remove its data from the state
  if (option === 'end') {
    delete state[trialId];
  }

  // Save the updated state to local storage
  saveState(state);
};
