import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

export default function Breakdown7(props) {
  return (
    <div className={cn(css(styles.root), 'breakdown7')}>
      <div className={css(styles.flexRow)}>
        <div className={css(styles.flexRow__item)}>
          <div className={css(styles.flexCol)}>
            <div className={css(styles.flexCol1)}>
              <h1 className={css(styles.big_title)}>Monday, Jan 16, 10:32 AM</h1>

              <div className={css(styles.flexRow1)}>
                <div className={css(styles.flexRow1__item)}>
                  <h1 className={css(styles.big_title1)}> Trip to Walgreens</h1>
                </div>
                <div className={css(styles.flexRow1__spacer)} />
                <div className={css(styles.flexRow1__item1)}>
                  <h1 className={css(styles.big_title1)}>You will arrive at 10:35 AM</h1>
                </div>
              </div>
            </div>

            <div className={css(styles.box)}>
              <div className={css(styles.content_box)}>
                <div className={css(styles.flexCol2)}>
                  <h1 className={css(styles.hero_title2)}>Would you like to call roadside assistance?</h1>

                  <div className={css(styles.flexRow2)}>
                    <div className={css(styles.wrapper)}>
                      <h1 className={css(styles.hero_title)}>Yes</h1>
                    </div>

                    <div className={css(styles.flexRow2__spacer)} />

                    <div className={css(styles.wrapper1)}>
                      <h1 className={css(styles.hero_title1)}>No</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css(styles.flexRow__spacer)} />
        <div className={css(styles.flexRow__item1)}>
          <div className={css(styles.flexCol3)}>
            <div className={css(styles.wrapper2)}>
              <h1 className={css(styles.hero_title3)}>Help</h1>
            </div>

            <div className={css(styles.box1)}>
              <div className={css(styles.flexCol4)}>
                <div className={css(styles.content_box1)}>
                  <div className={css(styles.flexRow3)}>
                    <div className={css(styles.flexRow3__item)}>
                      <img
                        className={css(styles.icon)}
                        src={require('../../../assets/dc622e46700af23843542a985b69faa6.png')}
                        alt="alt text"
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
                        className={css(styles.image)}
                        src={require('../../../assets/4801bcbe119b6d4bcb2246e5b6d77eaa.png')}
                        alt="alt text"
                      />
                    </div>
                    <div className={css(styles.flexRow4__spacer)} />
                    <h1 className={css(styles.big_title12)}>Entertainment</h1>
                  </div>
                </div>

                <div className={css(styles.content_box2)}>
                  <div className={css(styles.flexRow5)}>
                    <div className={css(styles.flexRow5__item)}>
                      <img
                        className={css(styles.image1)}
                        src={require('../../../assets/3956f8ef7b62ca0972a95158e9b3fe3c.png')}
                        alt="alt text"
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
                        className={css(styles.image2)}
                        src={require('../../../assets/17f9cc60e51f0388d1f0b461e561c592.png')}
                        alt="alt text"
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
    </div>
  );
}


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
    height: 1022,
    '@media (max-width: 1399px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      columnGap: 0,
      rowGap: 16
    },
    position: 'relative',
    minWidth: 1858,
    margin: '6px 23px 52px 39px',
    '@media (max-width: 1199px)': {
      margin: '6px 23px 52px 32px'
    },
    '@media (max-width: 991px)': {
      margin: '6px 16px 52px 28px'
    },
    '@media (max-width: 767px)': {
      margin: '6px 12px 52px 20px'
    },
    '@media (max-width: 479px)': {
      margin: '6px 12px 52px 16px'
    },
    '@media (max-width: 383px)': {
      margin: '6px 8px 52px 16px'
    }
  },
  flexRow__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 1302px',
    '@media (max-width: 1399px)': {
      flex: '0 0 100%'
    }
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  big_title: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
    width: '71.35%',
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
    margin: '0px 28.65% 0px 0%'
  },
  flexRow1: {
    display: 'flex',
    '@media (max-width: 1199px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      columnGap: 0,
      rowGap: 16
    },
    position: 'relative',
    margin: '86px 0px 0px'
  },
  flexRow1__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 300px',
    '@media (max-width: 1199px)': {
      flex: '0 0 100%'
    }
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
    flexGrow: 1,
    minHeight: 54
  },
  flexRow1__spacer: {
    flex: '0 1 562px',
    '@media (max-width: 1199px)': {
      display: 'none'
    }
  },
  flexRow1__item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 440px',
    '@media (max-width: 1199px)': {
      flex: '0 0 100%'
    }
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    outlineOffset: -2,
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
    margin: '12px 0px 0px'
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    flexGrow: 1,
    margin: '74px 38px 70px',
    '@media (max-width: 1199px)': {
      margin: '74px 32px 70px'
    },
    '@media (max-width: 991px)': {
      margin: '74px 24px 70px'
    },
    '@media (max-width: 767px)': {
      margin: '74px 20px 70px'
    },
    '@media (max-width: 479px)': {
      margin: '74px 16px 70px'
    }
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '187px 0px 133px'
  },
  hero_title2: {
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
    minHeight: 109
  },
  flexRow2: {
    display: 'flex',
    width: '74.06%',
    position: 'relative',
    margin: '126px auto 0px',
    '@media (max-width: 991px)': {
      width: '79.2%'
    },
    '@media (max-width: 767px)': {
      width: '83.55%'
    },
    '@media (max-width: 575px)': {
      width: '87.13%'
    },
    '@media (max-width: 479px)': {
      width: '90.03%'
    },
    '@media (max-width: 383px)': {
      width: '92.33%'
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(3,54,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px'
  },
  hero_title: {
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
  flexRow2__spacer: {
    flex: '0 1 191px'
  },
  wrapper1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    flex: '0 1 355px'
  },
  hero_title1: {
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
    flex: '0 1 36px',
    '@media (max-width: 1399px)': {
      display: 'none'
    }
  },
  flexRow__item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 520px',
    '@media (max-width: 1399px)': {
      flex: '0 0 100%'
    }
  },
  flexCol3: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '47px 0px 0px'
  },
  wrapper2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(176,0,32)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.247))',
    position: 'relative',
    margin: '0px 0px 0px 2px'
  },
  hero_title3: {
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
    position: 'relative',
    flexGrow: 1,
    minHeight: 36,
    margin: '40px auto'
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    outline: '2px solid rgb(204,204,204)',
    outlineOffset: -2,
    height: 799,
    filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.149))',
    position: 'relative',
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
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    position: 'relative',
    margin: '0px 8px 0px 0px',
    '@media (max-width: 1199px)': {
      margin: '0px 4px 0px 0px'
    }
  },
  flexRow3: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    margin: '13px 22px 14px',
    '@media (max-width: 1199px)': {
      margin: '13px 16px 14px'
    },
    '@media (max-width: 767px)': {
      margin: '13px 12px 14px'
    },
    '@media (max-width: 479px)': {
      margin: '13px 8px 14px'
    }
  },
  flexRow3__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 78px'
  },
  icon: {
    width: 78,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
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
    margin: '52px 6px 0px 2px'
  },
  flexRow4: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    margin: '15px 15px 23px',
    '@media (max-width: 991px)': {
      margin: '15px 8px 23px'
    },
    '@media (max-width: 383px)': {
      margin: '15px 4px 23px'
    }
  },
  flexRow4__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image: {
    width: 81,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
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
    margin: '25px 0px 5px'
  },
  content_box2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    position: 'relative',
    margin: '50px 0px 0px 8px',
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    }
  },
  flexRow5: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    margin: '24px 9px 13px',
    '@media (max-width: 991px)': {
      margin: '24px 4px 13px'
    }
  },
  flexRow5__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 90px'
  },
  image1: {
    width: 90,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
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
    position: 'relative',
    margin: '50px 0px 0px 8px',
    '@media (max-width: 1199px)': {
      margin: '50px 0px 0px 4px'
    }
  },
  flexRow6: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    margin: '16px 21px 15px',
    '@media (max-width: 1199px)': {
      margin: '16px 16px 15px'
    },
    '@media (max-width: 767px)': {
      margin: '16px 12px 15px'
    },
    '@media (max-width: 479px)': {
      margin: '16px 8px 15px'
    }
  },
  flexRow6__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image2: {
    width: 81,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
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
