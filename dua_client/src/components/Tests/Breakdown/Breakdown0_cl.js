import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

export default function Breakdown0_cl(props) {
  return (
    <div className={cn(css(styles.root), 'breakdown0-cl')}>
      <div className={css(styles.group)}>
        <div className={css(styles.flexCol)}>
          <h1 className={css(styles.big_title1)}>Monday, Jan 16, 10:30 AM</h1>
          <h1 className={css(styles.big_title11)}>
            {' '}
            Trip to Walgreens                                                     You will arrive at 10:35
            AM
          </h1>
        </div>

        <div className={css(styles.flexRow)}>
          <div className={css(styles.flexRow__item)}>
            <div className={css(styles.box)}>
              <div className={css(styles.flexCol1)}>
                <div className={css(styles.flexRow1)}>
                  <div className={css(styles.flexRow1__item)}>
                    <div className={css(styles.content_box)}>
                      <h1 className={css(styles.big_title)}>Change the Destination</h1>
                    </div>
                  </div>
                  <div className={css(styles.flexRow1__spacer)} />
                  <div className={css(styles.flexRow1__item1)}>
                    <div className={css(styles.group1)}>
                      <img
                        className={css(styles.image)}
                        src={require('../../../assets/08b3996eddb6c36fdaa059ba1fc1c170.png')}
                        alt="alt text"
                      />
                      <h1 className={css(styles.big_title2)}>5 minutes until arrival</h1>
                    </div>
                  </div>
                </div>

                <div className={css(styles.flexCol1__item)}>
                  <img
                    className={css(styles.image4)}
                    src={require('../../../assets/d49ab9c641275a20c4d14b1f6ceb3dc7.png')}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={css(styles.flexRow__spacer)} />
          <div className={css(styles.flexRow__item1)}>
            <div className={css(styles.flexCol2)}>
              <div className={css(styles.box2)}>
                <h1 className={css(styles.hero_title)}>Help</h1>
              </div>

              <div className={css(styles.box1)}>
                <div className={css(styles.flexCol3)}>
                  <div className={css(styles.content_box3)}>
                    <div className={css(styles.flexRow2)}>
                      <div className={css(styles.flexRow2__item)}>
                        <img
                          className={css(styles.icon)}
                          src={require('../../../assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                          alt="alt text"
                        />
                      </div>
                      <div className={css(styles.flexRow2__spacer)} />
                      <h1 className={css(styles.big_title3)}>Pair Your Device</h1>
                    </div>
                  </div>

                  <div className={css(styles.content_box2)}>
                    <div className={css(styles.flexRow3)}>
                      <div className={css(styles.flexRow3__item)}>
                        <img
                          className={css(styles.image1)}
                          src={require('../../../assets/f4d60d68371ca42c21aa921fff8977b0.png')}
                          alt="alt text"
                        />
                      </div>
                      <div className={css(styles.flexRow3__spacer)} />
                      <h1 className={css(styles.big_title4)}>Entertainment</h1>
                    </div>
                  </div>

                  <div className={css(styles.content_box1)}>
                    <div className={css(styles.flexRow4)}>
                      <div className={css(styles.flexRow4__item)}>
                        <img
                          className={css(styles.image2)}
                          src={require('../../../assets/fb6be168fd17fa501787444db8acbdf0.png')}
                          alt="alt text"
                        />
                      </div>
                      <div className={css(styles.flexRow4__spacer)} />
                      <h1 className={css(styles.big_title5)}>Vehicle Setting</h1>
                    </div>
                  </div>

                  <div className={css(styles.content_box1)}>
                    <div className={css(styles.flexRow5)}>
                      <div className={css(styles.flexRow5__item)}>
                        <img
                          className={css(styles.image3)}
                          src={require('../../../assets/0578a54ea8c9f67302705ecc395c12e5.png')}
                          alt="alt text"
                        />
                      </div>
                      <div className={css(styles.flexRow5__spacer)} />
                      <h1 className={css(styles.big_title6)}>Call</h1>
                    </div>
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
  group: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '53px 23px 52px 39px',
    '@media (max-width: 1199px)': {
      margin: '53px 23px 52px 32px'
    },
    '@media (max-width: 991px)': {
      margin: '53px 16px 52px 28px'
    },
    '@media (max-width: 767px)': {
      margin: '53px 12px 52px 20px'
    },
    '@media (max-width: 479px)': {
      margin: '53px 12px 52px 16px'
    },
    '@media (max-width: 383px)': {
      margin: '53px 8px 52px 16px'
    }
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    width: 1302,
    height: 227,
    position: 'absolute',
    top: -47,
    left: 0
  },
  big_title1: {
    display: 'flex',
    alignItems: 'center',
    font: '400 35px/0.74 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(60,64,67)',
    letterSpacing: '0.42px',
    width: 929,
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
    minWidth: 929,
    margin: '0px auto 0px 0px'
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
    minHeight: 54,
    margin: '102px 0px 0px'
  },
  flexRow: {
    display: 'flex',
    width: 1858,
    height: 975,
    '@media (max-width: 1399px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      columnGap: 0,
      rowGap: 16
    },
    position: 'relative',
    minWidth: 1858
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
  box: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.149)',
    outline: '2px solid rgb(204,204,204)',
    outlineOffset: -2,
    position: 'relative',
    flexGrow: 1,
    margin: '176px 0px 0px'
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '42px 15px 46px 19px',
    '@media (max-width: 991px)': {
      margin: '42px 8px 46px 12px'
    },
    '@media (max-width: 575px)': {
      margin: '42px 8px 46px'
    },
    '@media (max-width: 383px)': {
      margin: '42px 4px 46px 8px'
    }
  },
  flexRow1: {
    display: 'flex',
    '@media (max-width: 1399px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      columnGap: 0,
      rowGap: 16
    },
    position: 'relative'
  },
  flexRow1__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 450px',
    '@media (max-width: 1399px)': {
      flex: '0 0 100%'
    }
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '20px 20px 20px 20px',
    outline: '2px solid rgb(0,0,0)',
    outlineOffset: -2,
    position: 'relative',
    flexGrow: 1,
    margin: '0px 0px 29px'
  },
  big_title: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
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
    position: 'relative',
    flexGrow: 1,
    margin: '27px auto 31px',
    '@media (max-width: 479px)': {
      width: '85.31%'
    },
    '@media (max-width: 383px)': {
      width: '88.57%'
    }
  },
  flexRow1__spacer: {
    flex: '0 1 54px',
    '@media (max-width: 1399px)': {
      display: 'none'
    }
  },
  flexRow1__item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 764px',
    '@media (max-width: 1399px)': {
      flex: '0 0 100%'
    }
  },
  group1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '39px 0px 0px'
  },
  image: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative'
  },
  big_title2: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    height: 42,
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
  flexCol1__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  image4: {
    width: '84.94%',
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
    margin: '38px auto 0px',
    '@media (max-width: 1199px)': {
      width: '88.26%'
    },
    '@media (max-width: 991px)': {
      width: '90.93%'
    },
    '@media (max-width: 767px)': {
      width: '93.04%'
    },
    '@media (max-width: 575px)': {
      width: '94.69%'
    },
    '@media (max-width: 479px)': {
      width: '95.96%'
    },
    '@media (max-width: 383px)': {
      width: '96.94%'
    }
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
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(176,0,32)',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.247)',
    borderRadius: '20px 20px 20px 20px',
    outline: '1px solid rgb(0,0,0)',
    outlineOffset: -1,
    height: 116,
    position: 'relative',
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
    position: 'relative',
    flexGrow: 1,
    minHeight: 36,
    margin: '40px auto'
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.149)',
    outline: '2px solid rgb(204,204,204)',
    outlineOffset: -2,
    height: 799,
    position: 'relative',
    margin: '60px 2px 0px 0px'
  },
  flexCol3: {
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
    position: 'relative',
    margin: '0px 8px 0px 0px',
    '@media (max-width: 1199px)': {
      margin: '0px 4px 0px 0px'
    }
  },
  flexRow2: {
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
  flexRow2__item: {
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
  flexRow2__spacer: {
    flex: '0 1 25px'
  },
  big_title3: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
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
    minWidth: 291,
    margin: '22px 0px 21px'
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
  flexRow3__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image1: {
    width: 81,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
    minWidth: 81
  },
  flexRow3__spacer: {
    flex: '0 1 4px'
  },
  big_title4: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
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
    margin: '25px 0px 4px'
  },
  content_box1: {
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
  flexRow4: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    margin: '24px 9px 13px',
    '@media (max-width: 991px)': {
      margin: '24px 4px 13px'
    }
  },
  flexRow4__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 90px'
  },
  image2: {
    width: 90,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
    minWidth: 90
  },
  flexRow4__spacer: {
    flex: '0 1 18px'
  },
  big_title5: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
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
    minWidth: 258,
    margin: '12.5px 0px 23.5px'
  },
  content_box1: {
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
  flexRow5__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 81px'
  },
  image3: {
    width: 81,
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    position: 'relative',
    minWidth: 81
  },
  flexRow5__spacer: {
    flex: '0 1 31px'
  },
  big_title6: {
    display: 'flex',
    justifyContent: 'center',
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
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
