import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaused } from "../../../../redux/actions/trialActions";
import { createScreen } from "../../../../redux/actions/screenActions";

// This is a TrialScheduler hook that is used in VehicleUIContainer.js

// This hook initiates all timer elements of the trial.  Timers are made for each pause scheduled at the start of the trial
// Additionally, timers are made for each screen that is scheduled to open at a certain time.  When the timer for a screen goes off,
// if we are currently on that screen. We will open that screen. 

export const useTrialScheduler = (currentScreenIndex, showOverlay, setShowOverlay, screens, test, column, screenTimings, pauses) => {
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.trial.isPaused); 

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

      if (currentScreenIndex === targetScreenIndex && !showOverlay ) {
        setShowOverlay(true);
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
