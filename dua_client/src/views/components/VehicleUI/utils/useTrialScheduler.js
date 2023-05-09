import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaused } from "../../../../redux/actions/trialActions";
import { createScreen } from "../../../../redux/actions/screenActions";

// This is a TrialScheduler hook that is used in VehicleUIContainer.js

// This hook is used to schedule the opening and closing of screens as well as the pausing of the trial

export const useTrialScheduler = (currentScreenIndex, showOverlay, setShowOverlay, screens, test, column, screenTimings, pauses) => {
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.isPaused); 

  const [counter, setCounter] = useState(0);

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

  // Counter timer logic
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

  return { handlePause, counter };
};
