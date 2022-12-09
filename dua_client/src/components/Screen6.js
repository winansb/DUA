import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen6.module.scss';

export default function Screen6(props) {
  return (
    <div className={cn(styles.root, 'screen6')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <px-grid x="0fr 929fr 373fr" y="0px minmax(71px,71fr) 0px">
              <h1 className={styles.big_title}>Monday, Jan 16, 10:32 AM</h1>
            </px-grid>
            <div className={styles.col__item}>
              <div className={styles.box}>
                <px-grid track-style="flex-grow: 1;" x="0fr 1256fr 46fr" y="0px minmax(0px, 799fr) 0px">
                  <div className={styles.group}>
                    <h1 className={styles.big_title1}>
                      {' '}
                      Trip to Walgreens                                                                 You will arrive
                      at 10:35 AM
                    </h1>

                    <div className={styles.row1}>
                      <div className={styles.row1__item}>
                        <img
                          className={styles.image3}
                          src={require("../assets/9cb80d7e18d713eeb7142bce40cd1ab6.png")}
                          alt="alt text"
                        />
                      </div>
                      <div className={styles.row1__spacer} />
                      <div className={styles.row1__item1}>
                        <div className={styles.col1}>
                          <div className={styles.box4}>
                            <h1 className={styles.hero_title1_box}>
                              <div className={styles.hero_title1}>
                                <span className={styles.hero_title1_span0}>
                                  Situation Description:
                                  <br />
                                  <br />
                                </span>
                                <span className={styles.hero_title1_span1}>
                                  <br />
                                  There is an issue with my vehicle that <br />
                                  <br />
                                  is preventing me from driving.
                                </span>
                              </div>
                            </h1>
                          </div>

                          <div className={styles.box3}>
                            <h1 className={styles.hero_title11_box}>
                              <div className={styles.hero_title11}>
                                <span className={styles.hero_title11_span0}>
                                  Trip Information:
                                  <br />
                                </span>
                                <span className={styles.hero_title11_span1}>
                                  <br />
                                  <br />
                                  Destination: Walgreens
                                  <br />
                                  <br />
                                  Current Location: SE 2nd Avenue
                                  <br />
                                  <br />
                                  ETA: 3 Minutes
                                </span>
                              </div>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </px-grid>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row__spacer} />
        <div className={styles.row__item1}>
          <div className={styles.col2}>
            <div className={styles.col2__item}>
              <div className={styles.box2}>
                <px-grid
                  track-style="flex-grow: 1;"
                  x="109fr 300fr 109fr"
                  y="40px minmax(36px,36fr) 40px"
                  tn-x="109fr 400fr 109fr"
                  tn-y="40px minmax(36px,36fr) 40px">
                  <h1 className={styles.hero_title}>Help</h1>
                </px-grid>
              </div>
            </div>

            <div className={styles.box1}>
              <div className={styles.col3}>
                <div className={styles.content_box3}>
                  <div className={styles.row2}>
                    <div className={styles.row2__item}>
                      <img
                        className={styles.icon}
                        src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row2__spacer} />
                    <h1 className={styles.big_title11}>Pair Your Device</h1>
                  </div>
                </div>

                <div className={styles.content_box2}>
                  <div className={styles.row3}>
                    <div className={styles.row3__item}>
                      <img
                        className={styles.image}
                        src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row3__spacer} />
                    <h1 className={styles.big_title12}>Entertainment</h1>
                  </div>
                </div>

                <div className={styles.content_box1}>
                  <div className={styles.row4}>
                    <div className={styles.row4__item}>
                      <img
                        className={styles.image1}
                        src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row4__spacer} />
                    <h1 className={styles.big_title13}>Vehicle Setting</h1>
                  </div>
                </div>

                <div className={styles.content_box}>
                  <div className={styles.row5}>
                    <div className={styles.row5__item}>
                      <img
                        className={styles.image2}
                        src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row5__spacer} />
                    <h1 className={styles.big_title14}>Call</h1>
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

