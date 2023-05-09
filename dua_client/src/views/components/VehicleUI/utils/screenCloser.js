import { finishScreen } from '../../../../redux/actions/screenActions';

export const handleScreenClose = (dispatch, currentScreenIndex, counter, test, column) => {
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