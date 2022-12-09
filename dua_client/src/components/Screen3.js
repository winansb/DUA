import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen3.module.scss';

export default function Screen3(props) {
  return (
    <div className={cn(styles.root, 'screen3')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <px-grid x="0.5fr 457fr 857fr" y="0px minmax(0px, 71fr) 0px">
              <h1 className={styles.big_title}>Monday, Jan 16, 10:31 AM</h1>
            </px-grid>

            <div className={styles.col1}>
              <h1 className={styles.big_title1}>
                {' '}
                Trip to Walgreens                                                                 You will arrive at
                10:35 AM
              </h1>

              <div className={styles.box}>
                <div className={styles.content_box}>
                  <px-grid
                    track-style="flex-grow: 1;"
                    x="47fr 1133fr 46fr"
                    y="173px minmax(0px, 349fr) 133px"
                    lg-x="47fr 1511fr 46fr"
                    lg-y="173px minmax(0px, 349fr) 133px"
                    md-x="47fr 2015fr 46fr"
                    md-y="173px minmax(0px, 349fr) 133px"
                    sm-x="47fr 2687fr 46fr"
                    sm-y="173px minmax(0px, 349fr) 133px"
                    xs-x="47fr 3583fr 46fr"
                    xs-y="173px minmax(0px, 349fr) 133px"
                    xxs-x="47fr 4777fr 46fr"
                    xxs-y="173px minmax(0px, 349fr) 133px"
                    tn-x="47fr 6369fr 46fr"
                    tn-y="173px minmax(0px, 349fr) 133px">
                    <div className={styles.col2}>
                      <h1 className={styles.hero_title}>Would you like to pull over the vehicle?</h1>
                      <px-grid
                        x="112fr 909fr 112fr"
                        y="135px minmax(0px, 100fr) 0px"
                        md-x="112fr 1212fr 112fr"
                        md-y="135px minmax(0px, 100fr) 0px"
                        sm-x="112fr 1616fr 112fr"
                        sm-y="135px minmax(0px, 100fr) 0px"
                        xs-x="112fr 2155fr 112fr"
                        xs-y="135px minmax(0px, 100fr) 0px"
                        xxs-x="112fr 2873fr 112fr"
                        xxs-y="135px minmax(0px, 100fr) 0px"
                        tn-x="112fr 3831fr 112fr"
                        tn-y="135px minmax(0px, 100fr) 0px">
                        <div className={styles.row1}>
                          <div className={styles.row1__item}>
                            <div className={styles.box1}>
                              <px-grid
                                track-style="flex-grow: 1;"
                                x="102fr 151fr 102fr"
                                y="13px minmax(73px,73fr) 14px">
                                <h1 className={styles.hero_title1}>Yes</h1>
                              </px-grid>
                            </div>
                          </div>
                          <div className={styles.row1__spacer} />
                          <div className={styles.row1__item}>
                            <div className={styles.box2}>
                              <px-grid track-style="flex-grow: 1;" x="75fr 205fr 75fr" y="34px minmax(32px,32fr) 34px">
                                <h1 className={styles.hero_title2}>No</h1>
                              </px-grid>
                            </div>
                          </div>
                        </div>
                      </px-grid>
                    </div>
                  </px-grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row__spacer} />
        <div className={styles.row__item1}>
          <div className={styles.col3}>
            <div className={styles.col3__item}>
              <div className={styles.box4}>
                <px-grid
                  track-style="flex-grow: 1;"
                  x="109fr 300fr 109fr"
                  y="40px minmax(36px,36fr) 40px"
                  tn-x="109fr 400fr 109fr"
                  tn-y="40px minmax(36px,36fr) 40px">
                  <h1 className={styles.hero_title3}>Help</h1>
                </px-grid>
              </div>
            </div>

            <div className={styles.box3}>
              <div className={styles.col4}>
                <div className={styles.col4__item}>
                  <div className={styles.content_box1}>
                    <px-grid track-style="flex-grow: 1;" x="121fr 292fr 39fr" y="31px minmax(0px, 45fr) 32px">
                      <h1 className={styles.big_title11}>Pair Your Device</h1>
                    </px-grid>
                    <img
                      className={styles.icon}
                      src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col4__item}>
                  <div className={styles.content_box11}>
                    <px-grid track-style="flex-grow: 1;" x="100fr 253fr 99fr" y="40px minmax(0px, 42fr) 27px">
                      <h1 className={styles.big_title11}>Entertainment</h1>
                    </px-grid>
                    <img
                      className={styles.image}
                      src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col4__item}>
                  <div className={styles.content_box12}>
                    <px-grid
                      track-style="flex-grow: 1;"
                      x="61fr 330fr 61fr"
                      y="42px minmax(49px,49fr) 18px"
                      tn-x="61fr 440fr 61fr"
                      tn-y="42px minmax(49px,49fr) 18px">
                      <h1 className={styles.big_title11}>Vehicle Setting</h1>
                    </px-grid>
                    <img
                      className={styles.image1}
                      src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col4__item}>
                  <div className={styles.content_box2}>
                    <px-grid track-style="flex-grow: 1;" x="133fr 169fr 150fr" y="33px minmax(43px,43fr) 32px">
                      <h1 className={styles.big_title11}>Call</h1>
                    </px-grid>
                    <img
                      className={styles.image2}
                      src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                      alt="alt text"
                    />
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