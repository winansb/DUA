import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

import { getCurrentTime, getTimeLeft } from '../../hooks/TimeDisplay';

export default function Detour5(props) {
  return (
    <div className={cn(css(styles.root), 'detour5')}>
      <div className={css(styles.flexRow)}>
        <div className={css(styles.flexCol)}>
          <div className={css(styles.content_box)}>
            <div className={css(styles.flexCol1)}>
              <h1 className={css(styles.hero_title1)}>Your next destination is Waffle House </h1>
              <h1 className={css(styles.hero_title11)}>{props.ArrivalTime}</h1>
            </div>
          </div>

          <div className={css(styles.box)}>
            <div className={css(styles.content_box1)}>
              <div className={css(styles.flexCol2)}>
                <div className={css(styles.flexCol2__item)}>
                  <img
                    src={require('./assets/5f190dd0b023ff1907d2fd3256be1c13.png')}
                    alt="alt text"
                    className={css(styles.image3)}
                  />
                </div>
                <h1 className={css(styles.hero_title12)}>Would you like to skip to your next destination?</h1>
                <px-grid x="50fr 900px 100fr" y="0px 100px 0px">
                  <div className={css(styles.flexRow1)}>
                    <div className={css(styles.box3)} onClick={props.Detour5_Yes}>
                      <h1 className={css(styles.hero_title2)}>Yes</h1>
                    </div>

                    <div className={css(styles.flexRow1__spacer)} />

                    <div className={css(styles.box4)} onClick={props.Detour5_No}>
                      <h1 className={css(styles.hero_title3)}>No</h1>
                    </div>
                  </div>
                </px-grid>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.flexRow__spacer)} />

        <div className={css(styles.flexCol3)}>
          <div className={css(styles.box2)}>
            <h1 className={css(styles.hero_title)}>Help</h1>
          </div>

          <div className={css(styles.box1)}>
            <div className={css(styles.flexCol4)}>
              <div className={css(styles.content_box3)}>
                <div className={css(styles.flexRow2)}>
                  <div className={css(styles.flexRow2__item)}>
                    <img
                      src={require('./assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                      alt="alt text"
                      className={css(styles.icon)}
                    />
                  </div>
                  <div className={css(styles.flexRow2__spacer)} />
                  <h1 className={css(styles.big_title)}>Pair Your Device</h1>
                </div>
              </div>

              <div className={css(styles.content_box2)}>
                <div className={css(styles.flexRow3)}>
                  <div className={css(styles.flexRow3__item)}>
                    <img
                      src={require('./assets/f4d60d68371ca42c21aa921fff8977b0.png')}
                      alt="alt text"
                      className={css(styles.image)}
                    />
                  </div>
                  <div className={css(styles.flexRow3__spacer)} />
                  <h1 className={css(styles.big_title1)}>Entertainment</h1>
                </div>
              </div>

              <div className={css(styles.content_box11)}>
                <div className={css(styles.flexRow4)}>
                  <div className={css(styles.flexRow4__item)}>
                    <img
                      src={require('./assets/fb6be168fd17fa501787444db8acbdf0.png')}
                      alt="alt text"
                      className={css(styles.image1)}
                    />
                  </div>
                  <div className={css(styles.flexRow4__spacer)} />
                  <h1 className={css(styles.big_title2)}>Vehicle Setting</h1>
                </div>
              </div>

              <div className={css(styles.content_box4)}>
                <div className={css(styles.flexRow5)}>
                  <div className={css(styles.flexRow5__item)}>
                    <img
                      src={require('./assets/0578a54ea8c9f67302705ecc395c12e5.png')}
                      alt="alt text"
                      className={css(styles.image2)}
                    />
                  </div>
                  <div className={css(styles.flexRow5__spacer)} />
                  <h1 className={css(styles.big_title3)}>Call</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Detour5.propTypes = {
  ArrivalTime: PropTypes.string.isRequired
};

Detour5.inStorybook = true;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    overflow: 'hidden'
  },
  flexRow: {
    display: 'flex',
    width: 1858,
    height: 1010,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '18px 23px 52px 32px'
    },
    '@media (max-width: 991px)': {
      margin: '18px 16px 52px 28px'
    },
    '@media (max-width: 767px)': {
      margin: '18px 12px 52px 20px'
    },
    '@media (max-width: 479px)': {
      margin: '18px 12px 52px 16px'
    },
    '@media (max-width: 383px)': {
      margin: '18px 8px 52px 16px'
    },
    position: 'relative',
    minWidth: 1858,
    margin: '18px 23px 52px 39px'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 1302px'
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '48px 48px 48px 48px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    width: 1250,
    height: 257,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '0px 20px'
    },
    '@media (max-width: 991px)': {
      margin: '0px 16px'
    },
    '@media (max-width: 575px)': {
      margin: '0px 12px'
    },
    position: 'relative',
    minWidth: 1250,
    margin: '0px 26px'
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    width: '85.36%',
    position: 'relative',
    flexGrow: 1,
    margin: '75px 5.68% 63px 8.96%'
  },
  hero_title1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    marginTop: '-20px',
    letterSpacing: '0.6px',
    width: 1067,
    height: 76,
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
      fontSize: '24px'
    },
    position: 'relative',
    minWidth: 1067
  },
  hero_title11: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.6px',
    width: 1067,
    height: 26,
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
      fontSize: '24px'
    },
    position: 'relative',
    minWidth: 1067,
    margin: '17px 0px 0px'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    margin: '28px 0px 0px'
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    width: 1226,
    height: 668,
    boxShadow: 'inset 0px 15px 0px 0px rgb(176,0,32)',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '27px 32px 30px'
    },
    '@media (max-width: 991px)': {
      margin: '27px 24px 30px'
    },
    '@media (max-width: 767px)': {
      margin: '27px 20px 30px'
    },
    '@media (max-width: 479px)': {
      margin: '27px 16px 30px'
    },
    position: 'relative',
    minWidth: 1226,
    margin: '27px 38px 30px'
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    width: '90.38%',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      width: '92.6%'
    },
    '@media (max-width: 991px)': {
      width: '94.35%'
    },
    '@media (max-width: 767px)': {
      width: '95.7%'
    },
    '@media (max-width: 575px)': {
      width: '96.74%'
    },
    '@media (max-width: 479px)': {
      width: '97.53%'
    },
    '@media (max-width: 383px)': {
      width: '98.14%'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '68px auto 32px'
  },
  flexCol2__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  image3: {
    width: '49.64%',
    height: 'auto',
    aspectRatio: '1.6',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    '@media (min-width: 3000px) and (max-width: 99999px)': {
      aspectRatio: '1.6'
    },
    '@media (max-width: 2999px)': {
      aspectRatio: '1.6'
    },
    '@media (max-width: 767px)': {
      width: '56.78%'
    },
    '@media (max-width: 575px)': {
      width: '63.65%'
    },
    '@media (max-width: 479px)': {
      width: '70.02%'
    },
    '@media (max-width: 383px)': {
      width: '75.69%'
    },
    position: 'relative',
    margin: '0px auto'
  },
  hero_title12: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    letterSpacing: '0.6px',
    width: '100%',
    height: 114,
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
      fontSize: '24px'
    },
    position: 'relative',
    margin: '11px 0px 0px'
  },
  flexRow1: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  box3: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(3,54,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    width: 355,
    height: 100,
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px',
    marginLeft: '100px',
    minWidth: 355
  },
  hero_title2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '500 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0.48px',
    width: '42.54%',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '32px'
    },
    '@media (max-width: 767px)': {
      fontSize: '28px'
    },
    '@media (max-width: 575px)': {
      fontSize: '24px'
    },
    '@media (max-width: 383px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 73,
    margin: '13px auto 14px'
  },
  flexRow1__spacer: {
    flex: '0 1 163px'
  },
  box4: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    width: 355,
    height: 100,
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px',
    minWidth: 355
  },
  hero_title3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '500 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.48px',
    width: '57.75%',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '32px'
    },
    '@media (max-width: 767px)': {
      fontSize: '28px'
    },
    '@media (max-width: 575px)': {
      fontSize: '24px'
    },
    '@media (max-width: 383px)': {
      fontSize: '20px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 32,
    margin: '34px auto'
  },
  flexRow__spacer: {
    flex: '0 1 36px'
  },
  flexCol3: {
    display: 'flex',
    flexDirection: 'column',
    width: 520,
    height: 975,
    position: 'relative',
    flex: '0 1 520px',
    minWidth: 520,
    margin: '35px 0px 0px'
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(176,0,32)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    width: 518,
    height: 'auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    minWidth: 518,
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
    position: 'relative',
    flexGrow: 1,
    minHeight: 36,
    margin: '40px auto'
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    width: 518,
    height: 799,
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    minWidth: 518,
    margin: '60px 2px 0px 0px'
  },
  flexCol4: {
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
    '@media (max-width: 1199px)': {
      margin: '0px 4px 0px 0px'
    },
    position: 'relative',
    margin: '0px 8px 0px 0px'
  },
  flexRow2: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '13px 16px 14px'
    },
    '@media (max-width: 767px)': {
      margin: '13px 12px 14px'
    },
    '@media (max-width: 479px)': {
      margin: '13px 8px 14px'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '13px 22px 14px'
  },
  flexRow2__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 78px'
  },
  icon: {
    width: 78,
    height: 'auto',
    aspectRatio: '0.96',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minWidth: 78
  },
  flexRow2__spacer: {
    flex: '0 1 10px'
  },
  big_title: {
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
    margin: '52px 6px 0px 2px'
  },
  flexRow3: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 991px)': {
      margin: '15px 8px 23px'
    },
    '@media (max-width: 383px)': {
      margin: '15px 4px 23px'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '15px 15px 23px'
  },
  flexRow3__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image: {
    width: 81,
    height: 'auto',
    aspectRatio: '1.14',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minWidth: 81
  },
  flexRow3__spacer: {
    flex: '0 1 4px'
  },
  big_title1: {
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
    margin: '25px 0px 5px'
  },
  content_box11: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    },
    position: 'relative',
    margin: '50px 0px 0px 8px'
  },
  flexRow4: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 991px)': {
      margin: '24px 4px 13px'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '24px 9px 13px'
  },
  flexRow4__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 90px'
  },
  image1: {
    width: 90,
    height: 'auto',
    aspectRatio: '1.25',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minWidth: 90
  },
  flexRow4__spacer: {
    flex: '0 1 9px'
  },
  big_title2: {
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
  content_box4: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    },
    position: 'relative',
    margin: '50px 0px 0px 8px'
  },
  flexRow5: {
    display: 'flex',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      margin: '16px 16px 15px'
    },
    '@media (max-width: 767px)': {
      margin: '16px 12px 15px'
    },
    '@media (max-width: 479px)': {
      margin: '16px 8px 15px'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '16px 21px 15px'
  },
  flexRow5__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image2: {
    width: 81,
    height: 'auto',
    aspectRatio: '1.05',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minWidth: 81
  },
  flexRow5__spacer: {
    flex: '0 1 31px'
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
    minWidth: 169,
    minHeight: 43,
    margin: '17px 0px'
  }
});
