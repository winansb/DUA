import { finishScreen, screenTransition } from '../../../../redux/actions/screenActions';
import trialDataArray from '../../../../data/TrialData';

export const handleScreenClose = (nextIndex, screenName, actionName, setCurrentScreenIndex) => {

  // This is the mechanism that actually changes our place within our screen array
  setCurrentScreenIndex(nextIndex);

  // Next we determine whether or not we need to transition to a new screen


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