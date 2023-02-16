import React, { useState, useEffect } from 'react';

export default function Timer({ onTimeElapsed }) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    //if(!paused && started){
      const intervalId = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    //}
  }, []);

  useEffect(() => {
    onTimeElapsed(timeElapsed);
  }, [onTimeElapsed, timeElapsed]);

  return timeElapsed;
}
