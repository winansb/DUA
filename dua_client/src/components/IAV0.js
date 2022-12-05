import React, { useEffect, useCallback, useRef} from 'react'
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Trial_1.module.scss';

import handleVid from "./displayVideo";

import Screen0 from "./Screen0.js";


export default function Trial0() {
    // Call setTimout after component mounts
  useEffect(() => {
    const timer = setTimeout(() => handleVid("myVid1"), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Call setTimeout on user interaction
  const timerRef = useRef(null);
  const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => alert('Hey 🎉'), 1000);
  }

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
      <a href="/IAV1" className = "screenLink" onClick={this.setActiveTab}>12341234
        <Screen0/>
      </a>
  );
}
