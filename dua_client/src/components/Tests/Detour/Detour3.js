import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

import { getCurrentTime, getTimeLeft } from '../../hooks/TimeDisplay';

export default function Detour3(props) {

  return (
    <div className={cn(css(styles.root), 'detour3')}>
      <div className={css(styles.flexRow)}>
        <div className={css(styles.flexCol)}>
          <div className={css(styles.content_box)}>
            <div className={css(styles.flexCol1)}>
              <div className={css(styles.wrapper)}>
                <div className={css(styles.wrapper1)}>
                  <div className={css(styles.wrapper2)}>
                    <h1 className={css(styles.wrapper3)}>  Rerouting will not add time to your trip</h1>
                  </div>
                </div>
              </div>

              <div className={css(styles.wrapper4)}>
                <div className={css(styles.wrapper5)}>
                  <h1 className={css(styles.wrapper6)}>{props.ArrivalTime}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className={css(styles.box)}>
            <div className={css(styles.content_box1)}>
              <div className={css(styles.flexCol2)}>
                <div className={css(styles.flexCol2__item)}>
                  <img
                    src={require('./assets/7776d8d9de43641ccb110ff80914ecf6.png')}
                    alt="alt text"
                    className={css(styles.image3)}
                  />
                </div>

                <div className={css(styles.flexCol3)}>
                  <h1 className={css(styles.wrapper7)}>Would you like to continue the trip to your</h1>
                  <h1 className={css(styles.wrapper8)}>original destination with this detour?</h1>
                </div>

                <div className={css(styles.flexRow1)}>
                  <div className={css(styles.box3)} onClick={props.Detour3_Yes}>
                    <h1 className={css(styles.hero_title1)}>Yes</h1>
                  </div>

                  <div className={css(styles.flexRow1__spacer)} />

                  <div className={css(styles.box4)} onClick={props.Detour3_No}>
                    <h1 className={css(styles.hero_title2)}>No</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.flexRow__spacer)} />

        <div className={css(styles.flexCol4)}>
          <div className={css(styles.box2)}>
            <h1 className={css(styles.hero_title)}>Help</h1>
          </div>

          <div className={css(styles.box1)}>
            <div className={css(styles.flexCol5)}>
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

Detour3.propTypes = {
  ArrivalTime: PropTypes.string.isRequired
};

Detour3.inStorybook = true;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    width: 1920,
    height: 1080,
    position: 'relative',
    overflow: 'hidden',
    minWidth: 1920
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
    height: 'auto',
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
    width: '100%',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    position: 'relative',
    flexGrow: 1,
    minWidth: 1025,
    margin: '47px 0px 36px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  wrapper1: {
    display: 'flex',
    flexDirection: 'column',
    width: 900,
    height: 79,
    position: 'relative',
    minWidth: 900,
    margin: '2px 0px 0px'
  },
  wrapper2: {
    display: 'flex',
    flexDirection: 'column',
    width: 1250,
    height: 79,
    position: 'relative',
    minWidth: 1250
  },
  wrapper3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.6px',
    width: 'fit-content',
    height: 81,
    '@media (max-width: 2999px)': {
      textAlign: 'center'
    },
    '@media (max-width: 1199px)': {
      fontSize: '44px'
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: '0px auto'
  },
  wrapper4: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    position: 'relative',
    margin: '23px 0px 0px'
  },
  wrapper5: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  wrapper6: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.6px',
    height: 70,
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
    position: 'relative'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    width: 1302,
    height: 725,
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    minWidth: 1302,
    margin: '28px 0px 0px'
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
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
    flexGrow: 1,
    margin: '27px 38px 30px'
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    width: '84.75%',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1199px)': {
      width: '88.1%'
    },
    '@media (max-width: 991px)': {
      width: '90.81%'
    },
    '@media (max-width: 767px)': {
      width: '92.94%'
    },
    '@media (max-width: 575px)': {
      width: '94.61%'
    },
    '@media (max-width: 479px)': {
      width: '95.9%'
    },
    '@media (max-width: 383px)': {
      width: '96.9%'
    },
    position: 'relative',
    flexGrow: 1,
    margin: '61px auto 14px'
  },
  flexCol2__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  image3: {
    width: '52.94%',
    height: 'auto',
    aspectRatio: '1.66',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    margin: '0px 20.98% 0px 26.08%'
  },
  flexCol3: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '24px 0px 0px'
  },
  wrapper7: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.6px',
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
    minHeight: 54
  },
  wrapper8: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 50px/0.52 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0.6px',
    width: '99.84%',
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
    minHeight: 26,
    margin: '10px 0% 0px 0.16%'
  },
  flexRow1: {
    display: 'flex',
    width: '84.02%',
    position: 'relative',
    margin: '47px 6.93% 0px 9.05%'
  },
  box3: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(3,54,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px'
  },
  hero_title1: {
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
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px'
  },
  hero_title2: {
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
  flexCol4: {
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
    height: 116,
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
  flexCol5: {
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
