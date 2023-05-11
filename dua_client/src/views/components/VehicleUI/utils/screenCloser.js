import { finishScreen, screenTransition } from '../../../../redux/actions/screenActions';

export const handleScreenClose = (screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex) => {

  // This is the mechanism that actually changes our place within our screen array
  setCurrentScreenIndex(nextIndex);

  // Query our data structure to know if we should show the next screen or not
  const currentScreen = screens.find(screen => screen.screenName === screenName);

  console.log("currentScreen", currentScreen);

  // If the current screen is sequential, we need to show the overlay without waiting
  if (currentScreen && currentScreen.sequential) {
    setShowOverlay(true);
  // Otherwise, we need to wait for a time based trigger before showing the next screen to the participant. This is where
  // some groups of screens could be missed if the previous screen is not closed in time.
  } else {
    setShowOverlay(false);
  }


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

};