import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen9.module.scss';

export default function Screen9(props) {
  return (
    <div className={cn(styles.root, 'screen9')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <px-grid x="0fr 929fr 373fr" y="0px minmax(71px,71fr) 0px">
              <h1 className={styles.big_title}>Monday, Jan 16, 10:33 AM</h1>
            </px-grid>

            <div className={styles.box}>
              <h1 className={styles.big_title1}>
                {' '}
                Trip to Walgreens                                                                 You will arrive at
                10:35 AM
              </h1>

              <div className={styles.group}>
                <div className={styles.rect} />

                <div className={styles.col1}>
                  <h1 className={styles.hero_title2}>
                    No more immediate action is required
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    If you need further help, tap on the help button
                    <br />
                    <br />
                    <br />
                    in the upper right corner of the screen
                  </h1>
                  <px-grid
                    x="436fr 355fr 435fr"
                    y="130.5px minmax(0px, 100fr) 0px"
                    xxs-x="436fr 473fr 435fr"
                    xxs-y="130.5px minmax(0px, 100fr) 0px"
                    tn-x="436fr 631fr 435fr"
                    tn-y="130.5px minmax(0px, 100fr) 0px">
                    <div className={styles.box3}>
                      <div className={styles.content_box}>
                        <px-grid track-style="flex-grow: 1;" x="102fr 151fr 102fr" y="13px minmax(73px,73fr) 14px">
                          <h1 className={styles.hero_title1}>Ok</h1>
                        </px-grid>
                      </div>
                    </div>
                  </px-grid>
                </div>
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
                  <div className={styles.row1}>
                    <div className={styles.row1__item}>
                      <img
                        className={styles.icon}
                        src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row1__spacer} />
                    <h1 className={styles.big_title11}>Pair Your Device</h1>
                  </div>
                </div>

                <div className={styles.content_box2}>
                  <div className={styles.row2}>
                    <div className={styles.row2__item}>
                      <img
                        className={styles.image}
                        src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row2__spacer} />
                    <h1 className={styles.big_title12}>Entertainment</h1>
                  </div>
                </div>

                <div className={styles.content_box1}>
                  <div className={styles.row3}>
                    <div className={styles.row3__item}>
                      <img
                        className={styles.image1}
                        src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row3__spacer} />
                    <h1 className={styles.big_title13}>Vehicle Setting</h1>
                  </div>
                </div>

                <div className={styles.content_box1}>
                  <div className={styles.row4}>
                    <div className={styles.row4__item}>
                      <img
                        className={styles.image2}
                        src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row4__spacer} />
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
 