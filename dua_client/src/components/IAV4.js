import React, { useEffect, useCallback, useRef} from 'react'
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Trial_1.module.scss';

import Screen4 from "./Screen4.js";


export default function Trial1() {
    // Call setTimout after component mounts
  useEffect(() => {
    const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Call setTimeout on user interaction
  const timerRef = useRef(null);
  const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => alert('Hey 🎉'), 10000);
  }

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
      <a href="/IAV5" className = "screenLink">
        <Screen4/>
      </a>
  );
}