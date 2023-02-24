import { React, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

function Date() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update the time every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 id="date1" className={css(styles.big_title1)}>{currentTime.toString()}</h1>
    </div>
  );
} export default Date; 

const styles = StyleSheet.create({

  big_title1: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
    width: 929,
    height: 71,
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'absolute',
    top: 6,
    left: 39
  }
});
