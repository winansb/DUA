import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

export default function Detour11(props) {
  return (
    <div className={cn(css(styles.root), 'detour11')}>
      <div className={css(styles.flexRow)}>
        <div className={css(styles.flexCol)}>
          <div className={css(styles.flexCol1)}>
            <h1 id="date5" className={css(styles.big_title)}>{props.date}</h1>

            <div className={css(styles.flexRow1)}>
              <h1 id="destination5" className={css(styles.big_title1)}>{props.destination}</h1>
              <div className={css(styles.flexRow1__spacer)} />
              <h1 id="ArrivalTime8" className={css(styles.big_title2)}>{props.ArrivalTime}</h1>
            </div>
          </div>

          <div className={css(styles.box)}>
            <div className={css(styles.flexRow2)}>
              <div
                style={{ '--src': `url(${require('./assets/9cb80d7e18d713eeb7142bce40cd1ab6.png')})` }}
                className={css(styles.content_box)}>
                <div className={css(styles.content_box1)}>
                  <h1 id ="EmergencyContact" className={css(styles.big_title21)}>{props.EmergencyContact}</h1>
                </div>

                <img
                  src={require('./assets/0ec82a7462cef454e2d28aa90dd3bc22.png')}
                  alt="alt text"
                  className={css(styles.image3)}
                  onClick={props.Detour11_EndCall}
                />
              </div>

              <div className={css(styles.flexRow2__spacer)} />

              <div className={css(styles.flexCol2)}>
                <div className={css(styles.box4)}>
                  <div className={css(styles.flexCol3)}>
                    <h1 className={css(styles.hero_title1)}>Situation Description:</h1>
                    <h1 className={css(styles.hero_title2)}>My vehicle detected a road blockage</h1>
                    <h1 className={css(styles.hero_title21)}>and we needed to take a detour.</h1>
                  </div>
                </div>

                <div className={css(styles.box3)}>
                  <div className={css(styles.flexCol4)}>
                    <h1 className={css(styles.hero_title11)}>Trip Information:</h1>
                    <h1 id="tripInfoDestination" className={css(styles.hero_title22)}>{props.tripInfoDestination}</h1>
                    <h1 className={css(styles.hero_title23)}>Location: E University Avenue</h1>
                    <h1 id="tripInfoETA" className={css(styles.hero_title24)}>{props.tripInfoETA}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.flexRow__spacer)} />

        <div className={css(styles.flexCol5)}>
          <div className={css(styles.box2)}>
            <h1 className={css(styles.hero_title)}>Help</h1>
          </div>

          <div className={css(styles.box1)}>
            <div className={css(styles.flexCol6)}>
              <div className={css(styles.content_box2)}>
                <div className={css(styles.flexRow3)}>
                  <div className={css(styles.flexRow3__item)}>
                    <img
                      src={require('./assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                      alt="alt text"
                      className={css(styles.icon)}
                    />
                  </div>
                  <div className={css(styles.flexRow3__spacer)} />
                  <h1 className={css(styles.big_title11)}>Pair Your Device</h1>
                </div>
              </div>

              <div className={css(styles.content_box11)}>
                <div className={css(styles.flexRow4)}>
                  <div className={css(styles.flexRow4__item)}>
                    <img
                      src={require('./assets/f4d60d68371ca42c21aa921fff8977b0.png')}
                      alt="alt text"
                      className={css(styles.image)}
                    />
                  </div>
                  <div className={css(styles.flexRow4__spacer)} />
                  <h1 className={css(styles.big_title12)}>Entertainment</h1>
                </div>
              </div>

              <div className={css(styles.content_box21)}>
                <div className={css(styles.flexRow5)}>
                  <div className={css(styles.flexRow5__item)}>
                    <img
                      src={require('./assets/fb6be168fd17fa501787444db8acbdf0.png')}
                      alt="alt text"
                      className={css(styles.image1)}
                    />
                  </div>
                  <div className={css(styles.flexRow5__spacer)} />
                  <h1 className={css(styles.big_title13)}>Vehicle Setting</h1>
                </div>
              </div>

              <div className={css(styles.content_box3)}>
                <div className={css(styles.flexRow6)}>
                  <div className={css(styles.flexRow6__item)}>
                    <img
                      src={require('./assets/0578a54ea8c9f67302705ecc395c12e5.png')}
                      alt="alt text"
                      className={css(styles.image2)}
                    />
                  </div>
                  <div className={css(styles.flexRow6__spacer)} />
                  <h1 className={css(styles.big_title14)}>Call</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Detour11.propTypes = {
  date: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  ArrivalTime: PropTypes.string.isRequired,
  EmergencyContact: PropTypes.string.isRequired,
  Detour11_EndCall: PropTypes.func.isRequired,
  tripInfoDestination: PropTypes.string.isRequired,
  tripInfoETA: PropTypes.string.isRequired
};

Detour11.inStorybook = true;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 0
  },
  flexRow: {
    display: 'flex',
    width: 1869,
    height: 1022,
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '6px 23px 52px 24px'
    },
    '@media (max-width: 991px)': {
      margin: '6px 16px 52px 20px'
    },
    '@media (max-width: 767px)': {
      margin: '6px 12px 52px 16px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '6px 12px 52px'
    },
    '@media (max-width: 383px)': {
      margin: '6px 8px 52px 12px'
    },
    position: 'relative',
    minWidth: 1869,
    margin: '6px 23px 52px 28px'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 1324px',
    minHeight: 0
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    width: 1324,
    height: 217,
    position: 'relative',
    minWidth: 1324
  },
  big_title: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
    width: '70.17%',
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
    minHeight: 71,
    margin: '0px 29% 0px 0.83%'
  },
  flexRow1: {
    display: 'flex',
    position: 'relative',
    minHeight: 0,
    margin: '92px 0px 0px'
  },
  big_title1: {
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
  flexRow1__spacer: {
    flex: '0 1 565px'
  },
  big_title2: {
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
  box: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {
      margin: '6px 4px 0px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {},
    position: 'relative',
    minHeight: 0,
    margin: '6px 11px 0px'
  },
  flexRow2: {
    display: 'flex',
    width: 1302,
    height: 799,
    position: 'relative',
    minWidth: 1302
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--src) center center / cover no-repeat',
    width: 460,
    height: 799,
    position: 'relative',
    flex: '0 1 460px',
    minWidth: 460
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(20,20,20)',
    height: 61,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  big_title21: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0.31999999999999995px',
    width: '67.61%',
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
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 479px)': {},
    '@media (max-width: 383px)': {
      width: '73.58%'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '21px auto 14px'
  },
  image3: {
    width: 120,
    height: 'min-content',
    cursor: 'pointer',
    aspectRatio: '1.25',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 120,
    margin: '665px auto 38px'
  },
  flexRow2__spacer: {
    flex: '0 1 49px'
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    width: 747,
    height: 733,
    position: 'relative',
    flex: '0 1 747px',
    minWidth: 747,
    margin: '20px 0px 46px'
  },
  box4: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    width: 747,
    height: 313,
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    minWidth: 747
  },
  flexCol3: {
    display: 'flex',
    flexDirection: 'column',
    width: '92.1%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '66px 1.74% 45px 6.16%'
  },
  hero_title1: {
    display: 'flex',
    alignItems: 'center',
    font: '700 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left'
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
    minHeight: 54
  },
  hero_title2: {
    display: 'flex',
    alignItems: 'center',
    font: '400 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left'
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
    minHeight: 54,
    margin: '40px 0px 0px'
  },
  hero_title21: {
    display: 'flex',
    alignItems: 'center',
    font: '400 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left'
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
    minHeight: 54
  },
  box3: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    minHeight: 0,
    margin: '37px 0px 0px'
  },
  flexCol4: {
    display: 'flex',
    flexDirection: 'column',
    width: '93.17%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '106px 0% 61px 6.83%'
  },
  hero_title11: {
    display: 'flex',
    alignItems: 'center',
    font: '700 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left',
      margin: '0px 4px 0px 0px'
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
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    minHeight: 26,
    margin: '0px 8px 0px 0px'
  },
  hero_title22: {
    display: 'flex',
    alignItems: 'center',
    font: '400 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left',
      margin: '45px 4px 0px 0px'
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
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    minHeight: 26,
    margin: '45px 8px 0px 0px'
  },
  hero_title23: {
    display: 'flex',
    alignItems: 'center',
    font: '400 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left',
      margin: '22px 0px 0px 4px'
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
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    minHeight: 26,
    margin: '22px 0px 0px 8px'
  },
  hero_title24: {
    display: 'flex',
    alignItems: 'center',
    font: '400 40px/0.65 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.48px',
    '@media (max-width: 1199px)': {
      fontSize: '36px',
      textAlign: 'left',
      margin: '17px 0px 0px 4px'
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
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    minHeight: 54,
    margin: '17px 0px 0px 8px'
  },
  flexRow__spacer: {
    flex: '0 1 25px'
  },
  flexCol5: {
    display: 'flex',
    flexDirection: 'column',
    width: 520,
    height: 975,
    position: 'relative',
    flex: '0 1 520px',
    minWidth: 520,
    margin: '47px 0px 0px'
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
    width: 300,
    height: 36,
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
      width: 400,
      minWidth: 400
    },
    '@media (min-width: 3000px) and (max-width: 99999px)': {},
    '@media (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {},
    position: 'relative',
    minWidth: 300,
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
  flexCol6: {
    display: 'flex',
    flexDirection: 'column',
    height: 586,
    position: 'absolute',
    top: 101,
    left: 29,
    right: 29
  },
  content_box2: {
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
  big_title11: {
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
  content_box11: {
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
  image: {
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
  big_title12: {
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
  content_box21: {
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
  image1: {
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
  big_title13: {
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
  image2: {
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
  big_title14: {
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
