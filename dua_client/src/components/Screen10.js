import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen10.module.scss';

export default function Screen10(props) {
  return (
    <div className={cn(styles.root, 'screen10')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <px-grid x="0fr 929fr 373fr" y="0px minmax(71px,71fr) 0px">
              <h1 className={styles.big_title1}>Monday, Jan 16, 10:33 AM</h1>
            </px-grid>

            <div className={styles.box}>
              <h1 className={styles.big_title11}>
                {' '}
                Trip to Walgreens                                                                 You will arrive at
                10:35 AM
              </h1>

              <div className={styles.col1}>
                <div className={styles.row1}>
                  <div className={styles.row1__item}>
                    <div className={styles.content_box}>
                      <px-grid
                        track-style="flex-grow: 1;"
                        x="42fr 366fr 42fr"
                        y="27px minmax(0px, 42fr) 31px"
                        xxs-x="42fr 488fr 42fr"
                        xxs-y="27px minmax(0px, 42fr) 31px"
                        tn-x="42fr 651fr 42fr"
                        tn-y="27px minmax(0px, 42fr) 31px">
                        <h1 className={styles.big_title}>Change the Destination</h1>
                      </px-grid>
                    </div>
                  </div>
                  <div className={styles.row1__spacer} />
                  <div className={styles.row1__item1}>
                    <div className={styles.group}>
                      <img
                        className={styles.image}
                        src={require("../assets/08b3996eddb6c36fdaa059ba1fc1c170.png")}
                        alt="alt text"
                      />
                      <h1 className={styles.big_title2}>2 minutes until arrival</h1>
                    </div>
                  </div>
                </div>

                <div className={styles.col1__item}>
                  <px-grid track-style="flex-grow: 1;" x="93fr 1077fr 98fr" y="38px minmax(0px, max-content) 0px">
                    <img
                      className={styles.image4}
                      src={require("../assets/d49ab9c641275a20c4d14b1f6ceb3dc7.png")}
                      alt="alt text"
                    />
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
                  <div className={styles.row2}>
                    <div className={styles.row2__item}>
                      <img
                        className={styles.icon}
                        src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row2__spacer} />
                    <h1 className={styles.big_title3}>Pair Your Device</h1>
                  </div>
                </div>

                <div className={styles.content_box2}>
                  <div className={styles.row3}>
                    <div className={styles.row3__item}>
                      <img
                        className={styles.image1}
                        src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row3__spacer} />
                    <h1 className={styles.big_title4}>Entertainment</h1>
                  </div>
                </div>

                <div className={styles.content_box1}>
                  <div className={styles.row4}>
                    <div className={styles.row4__item}>
                      <img
                        className={styles.image2}
                        src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row4__spacer} />
                    <h1 className={styles.big_title5}>Vehicle Setting</h1>
                  </div>
                </div>

                <div className={styles.content_box1}>
                  <div className={styles.row5}>
                    <div className={styles.row5__item}>
                      <img
                        className={styles.image3}
                        src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                        alt="alt text"
                      />
                    </div>
                    <div className={styles.row5__spacer} />
                    <h1 className={styles.big_title6}>Call</h1>
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

 