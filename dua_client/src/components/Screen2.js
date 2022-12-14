import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen2.module.scss';

export default function Screen2(props) {
  return (
    <div className={cn(styles.root, 'screen2')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <h1 className={styles.big_title}>Monday, Jan 16, 10:31 AM</h1>

            <div className={styles.box}>
              <h1 className={styles.big_title1}>
                {' '}
                Trip to Walgreens                                                                 You will arrive at
                10:35 AM
              </h1>

              <div className={styles.content_box}>
                <div className={styles.col1}>
                  <div className={styles.wrapper}>
                    <h1 className={styles.hero_title}>
                      We have detected an issue with the
                      <br />
                      <br />
                      vehicle that is preventing us from driving.
                    </h1>
                  </div>

                  <div className={styles.box3}>
                    <div className={styles.content_box1}>
                      <h1 className={styles.hero_title2}>Ok</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row__spacer} />
        <div className={styles.row__item1}>
          <div className={styles.col2}>
            <div className={styles.box2}>
              <h1 className={styles.hero_title1}>Help</h1>
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

                <div className={styles.content_box11}>
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

                <div className={styles.content_box4}>
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