import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen1.module.scss';

export default function Screen1(props) {
  return (
    <div className={cn(styles.root, 'screen1')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <px-grid x="0fr 929fr 373fr" y="0px minmax(71px,71fr) 0px">
              <h1 className={styles.big_title}>Monday, Jan 16, 10:31 AM</h1>
            </px-grid>

            <div className={styles.col1}>
              <h1 className={styles.big_title1}>
                {' '}
                Trip to Walgreens                                                                 You will arrive at
                10:35 AM
              </h1>

              <div className={styles.box}>
                <div className={styles.group}>
                  <div className={styles.col2}>
                    <div className={styles.wrapper}>
                      <h1 className={styles.hero_title}>
                        We have detected an issue with the
                        <br />
                        <br />
                        vehicle that is preventing us from driving.
                      </h1>
                    </div>

                    <div className={styles.col2__item}>
                      <px-grid track-style="flex-grow: 1;" x="322fr 355fr 280fr" y="116px minmax(0px, 100fr) 0px">
                        <div className={styles.box3}>
                          <px-grid track-style="flex-grow: 1;" x="102fr 151fr 102fr" y="13px minmax(73px,73fr) 14px">
                            <h1 className={styles.hero_title2}>Ok</h1>
                          </px-grid>
                        </div>
                      </px-grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row__spacer} />
        <div className={styles.row__item1}>
          <div className={styles.col3}>
            <div className={styles.col3__item}>
              <div className={styles.box2}>
                <px-grid
                  track-style="flex-grow: 1;"
                  x="109fr 300fr 109fr"
                  y="40px minmax(36px,36fr) 40px"
                  tn-x="109fr 400fr 109fr"
                  tn-y="40px minmax(36px,36fr) 40px">
                  <h1 className={styles.hero_title1}>Help</h1>
                </px-grid>
              </div>
            </div>

            <div className={styles.box1}>
              <div className={styles.col4}>
                <div className={styles.col4__item}>
                  <div className={styles.content_box2}>
                    <px-grid track-style="flex-grow: 1;" x="102fr 320fr 30fr" y="25.5px minmax(0px, 57fr) 25.5px">
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
                  <div className={styles.content_box}>
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
                  <div className={styles.content_box1}>
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
                  <div className={styles.content_box21}>
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