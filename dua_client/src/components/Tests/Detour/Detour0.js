import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

import { getCurrentTime, getTimeLeft } from '../../hooks/TimeDisplay';


export default function Detour0(props) {

  const handleClick = () => {
    const event = new CustomEvent("buttonClicked", { detail: "buttonFunction" });
    window.dispatchEvent(event);
    // Rest of the button click logic...
  };

  const { getTimeLeft } = require(`../../hooks/TimeDisplay`); 

  const [currentTime, setCurrentTime] = useState(getCurrentTime()); 
  const [timeTillArrival, setTimeTillArrival] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={cn(css(styles.root), 'detour0')}>
      <h1 id="date1" className={css(styles.big_title1)}>{currentTime}</h1>
      <div className={css(styles.group)}>
        <div className={css(styles.flexRow)}>
          <h1 id="destination1" className={css(styles.big_title11)}>{props.destination}</h1>
          <div className={css(styles.flexRow__spacer)} />
          <h1 id="ArrivalTime1" className={css(styles.big_title12)}>{props.ArrivalTime}</h1>
        </div>

        <div className={css(styles.flexRow1)}>
          <div className={css(styles.box)}>
            <div className={css(styles.flexCol)}>
              <div className={css(styles.flexRow2)}>
                <div className={styles.content_box} onClick={props.Detour0_changeDest}>
                  <h1 className={css(styles.big_title)}>Change the Destination</h1>
                </div>

                <div className={css(styles.flexRow2__spacer)} />

                <div className={css(styles.group1)}>
                  <img
                    src={require('./assets/08b3996eddb6c36fdaa059ba1fc1c170.png')}
                    alt="alt text"
                    className={css(styles.image)}
                  />
                  <h1 id="TripTimeRemaining1" className={css(styles.big_title2)}>{props.TripTimeRemaining}</h1>
                </div>
              </div>

              <div className={css(styles.flexCol__item)}>
                <img
                  src={require('./assets/a000e4fb5a62819604efd375cd91087e.png')}
                  alt="alt text"
                  className={css(styles.image4)}
                />
              </div>
            </div>
          </div>

          <div className={css(styles.flexRow1__spacer)} />

          <div className={css(styles.flexCol1)}>
            <div className={css(styles.box2)}>
              <h1 className={css(styles.hero_title)}>Help</h1>
            </div>

            <div className={css(styles.box1)}>
              <div className={css(styles.flexCol2)}>
                <div className={css(styles.content_box3)}>
                  <div className={css(styles.flexRow3)}>
                    <div className={css(styles.flexRow3__item)}>
                      <img
                        src={require('./assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                        alt="alt text"
                        className={css(styles.icon)}
                      />
                    </div>
                    <div className={css(styles.flexRow3__spacer)} />
                    <h1 className={css(styles.big_title3)}>Pair Your Device</h1>
                  </div>
                </div>

                <div className={css(styles.content_box2)}>
                  <div className={css(styles.flexRow4)}>
                    <div className={css(styles.flexRow4__item)}>
                      <img
                        src={require('./assets/f4d60d68371ca42c21aa921fff8977b0.png')}
                        alt="alt text"
                        className={css(styles.image1)}
                      />
                    </div>
                    <div className={css(styles.flexRow4__spacer)} />
                    <h1 className={css(styles.big_title4)}>Entertainment</h1>
                  </div>
                </div>

                <div className={css(styles.content_box1)}>
                  <div className={css(styles.flexRow5)}>
                    <div className={css(styles.flexRow5__item)}>
                      <img
                        src={require('./assets/fb6be168fd17fa501787444db8acbdf0.png')}
                        alt="alt text"
                        className={css(styles.image2)}
                      />
                    </div>
                    <div className={css(styles.flexRow5__spacer)} />
                    <h1 className={css(styles.big_title5)}>Vehicle Setting</h1>
                  </div>
                </div>

                <div className={css(styles.content_box1)}>
                  <div className={css(styles.flexRow6)}>
                    <div className={css(styles.flexRow6__item)}>
                      <img
                        src={require('./assets/0578a54ea8c9f67302705ecc395c12e5.png')}
                        alt="alt text"
                        className={css(styles.image3)}
                      />
                    </div>
                    <div className={css(styles.flexRow6__spacer)} />
                    <h1 className={css(styles.big_title6)}>Call</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Detour0.propTypes = {
  date: PropTypes.string.isRequired,
  ArrivalTime: PropTypes.string.isRequired,
  TripTimeRemaining: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
};

Detour0.inStorybook = true;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 0
  },
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
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '53px 23px 52px 32px'
    },
    '@media (max-width: 991px)': {
      margin: '53px 16px 52px 28px'
    },
    '@media (max-width: 767px)': {
      margin: '53px 12px 52px 20px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '53px 12px 52px 16px'
    },
    '@media (max-width: 383px)': {
      margin: '53px 8px 52px 16px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '53px 23px 52px 39px'
  },
  flexRow: {
    display: 'flex',
    width: 1323,
    height: 54,
    position: 'absolute',
    top: 107,
    left: 0
  },
  big_title11: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
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
    position: 'relative',
    flex: '1 1 305px',
    minHeight: 54
  },
  flexRow__spacer: {
    flex: '0 1 564px'
  },
  big_title12: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
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
    position: 'relative',
    flex: '1 1 454px',
    minHeight: 54
  },
  flexRow1: {
    display: 'flex',
    width: 1858,
    height: 'min-content',
    position: 'relative',
    minHeight: 0,
    minWidth: 1858
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    flex: '0 1 1302px',
    minHeight: 0,
    margin: '176px 0px 0px'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    width: 1268,
    height: 660,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 991px)': {
      margin: '42px 8px 97px 12px'
    },
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {
      margin: '42px 8px 97px'
    },
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {
      margin: '42px 4px 97px 8px'
    },
    position: 'relative',
    minWidth: 1268,
    margin: '42px 15px 97px 19px'
  },
  flexRow2: {
    display: 'flex',
    position: 'relative',
    minHeight: 0
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '2px solid rgb(0,0,0)',
    outlineOffset: -2,
    position: 'relative',
    flex: '0 1 450px',
    minHeight: 0,
    margin: '0px 0px 29px'
  },
  big_title: {
    display: 'flex',
    justifyContent: 'left',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'left',
    letterSpacing: '0px',
    width: '81.33%',
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 479px)': {
      width: '85.31%'
    },
    '@media (max-width: 383px)': {
      width: '88.57%'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '27px auto 32px'
  },
  flexRow2__spacer: {
    flex: '0 1 54px'
  },
  group1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 764px',
    minHeight: 0,
    margin: '39px 0px 0px'
  },
  image: {
    width: '100%',
    height: 'min-content',
    aspectRatio: '8.49',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0
  },
  big_title2: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    height: 41,
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'absolute',
    top: -39,
    left: 101,
    right: 70
  },
  flexCol__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  image4: {
    width: '70.98%',
    height: 'min-content',
    aspectRatio: '2.16',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    '@media (min-width: 3000px) and (max-width: 99999px)': {
      aspectRatio: '2.16'
    },
    '@media (max-width: 2999px)': {
      aspectRatio: '2.16'
    },
    '@media (max-width: 1919px)': {
      aspectRatio: '2.16'
    },
    '@media (max-width: 1399px)': {
      aspectRatio: '2.16'
    },
    '@media (max-width: 1199px)': {
      aspectRatio: '2.16'
    },
    '@media (max-width: 991px)': {
      width: '76.53%'
    },
    '@media (max-width: 767px)': {
      width: '81.3%'
    },
    '@media (max-width: 575px)': {
      width: '85.29%'
    },
    '@media (max-width: 479px)': {
      width: '88.54%'
    },
    '@media (max-width: 383px)': {
      width: '91.15%'
    },
    position: 'relative',
    minHeight: 0,
    margin: '114px auto 0px'
  },
  flexRow1__spacer: {
    flex: '0 1 36px'
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    width: 520,
    height: 975,
    position: 'relative',
    flex: '0 1 520px',
    minWidth: 520
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(176,0,32)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    minHeight: 0,
    margin: '0px 0px 0px 2px'
  },
  hero_title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '500 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0.6px',
    width: '57.92%',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px',
      width: '64.72%'
    },
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    flexGrow: 1,
    minHeight: 36,
    margin: '40px auto'
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    minHeight: 799,
    margin: '60px 2px 0px 0px'
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    height: 586,
    position: 'absolute',
    top: 101,
    left: 29,
    right: 29
  },
  content_box3: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '0px 4px 0px 0px'
    },
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {},
    position: 'relative',
    minHeight: 0,
    margin: '0px 8px 0px 0px'
  },
  flexRow3: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '13px 16px 14px'
    },
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {
      margin: '13px 12px 14px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '13px 8px 14px'
    },
    '@media (max-width: 383px)': {},
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '13px 22px 14px'
  },
  flexRow3__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 78px'
  },
  icon: {
    width: 78,
    height: 'min-content',
    aspectRatio: '0.96',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 78
  },
  flexRow3__spacer: {
    flex: '0 1 10px'
  },
  big_title3: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 257,
    minHeight: 41,
    margin: '24px 0px 16px'
  },
  content_box2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    position: 'relative',
    minHeight: 0,
    margin: '52px 6px 0px 2px'
  },
  flexRow4: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 991px)': {
      margin: '15px 8px 23px'
    },
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {
      margin: '15px 4px 23px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '15px 15px 23px'
  },
  flexRow4__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image1: {
    width: 81,
    height: 'min-content',
    aspectRatio: '1.14',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 81
  },
  flexRow4__spacer: {
    flex: '0 1 4px'
  },
  big_title4: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 253,
    minHeight: 0,
    margin: '25px 0px 5px'
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    },
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {},
    position: 'relative',
    minHeight: 0,
    margin: '50px 0px 0px 8px'
  },
  flexRow5: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 991px)': {
      margin: '24px 4px 13px'
    },
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {},
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '24px 9px 13px'
  },
  flexRow5__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 90px'
  },
  image2: {
    width: 90,
    height: 'min-content',
    aspectRatio: '1.25',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 90
  },
  flexRow5__spacer: {
    flex: '0 1 9px'
  },
  big_title5: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 236,
    minHeight: 41,
    margin: '18px 0px 13px'
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    },
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {},
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {},
    position: 'relative',
    minHeight: 0,
    margin: '50px 0px 0px 8px'
  },
  flexRow6: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '16px 16px 15px'
    },
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {
      margin: '16px 12px 15px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '16px 8px 15px'
    },
    '@media (max-width: 383px)': {},
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '16px 21px 15px'
  },
  flexRow6__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image3: {
    width: 81,
    height: 'min-content',
    aspectRatio: '1.05',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 81
  },
  flexRow6__spacer: {
    flex: '0 1 31px'
  },
  big_title6: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.17 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    '@media (max-width: 991px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 767px)': {
      fontSize: '24px'
    },
    '@media (max-width: 575px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 169,
    minHeight: 43,
    margin: '17px 0px'
  }
});
