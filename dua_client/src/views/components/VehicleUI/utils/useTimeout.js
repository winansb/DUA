import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useTimeout = (callback, displayTimeSeconds) => {
  const isPaused = useSelector((state) => state.trial.isPaused);
  const timerIdRef = useRef();
  const [remainingTime, setRemainingTime] = useState(displayTimeSeconds * 1000);

  useEffect(() => {
    if (!isPaused && remainingTime > 0) {
      timerIdRef.current = setTimeout(() => {
        setRemainingTime(remainingTime - 1000);
      }, 1000);
    } else {
      clearTimeout(timerIdRef.current);
    }

    return () => clearTimeout(timerIdRef.current);
  }, [isPaused, remainingTime]);

  useEffect(() => {
    setRemainingTime(displayTimeSeconds * 1000);
  }, [displayTimeSeconds]);

  useEffect(() => {
    if (remainingTime === 0) {
      callback();
    }
  }, [remainingTime, callback]);
};

export default useTimeout;
