import React from 'react';
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Screen4.module.scss';

export default function Screen4(props) {
  return (
    <div className={cn(styles.root, 'screen4')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <div className={styles.content_box}>
              <h1 className={styles.hero_title1}>We are pulling over the vehicle</h1>
            </div>

            <div className={styles.box}>
              <div className={styles.content_box1}>
                <div className={styles.col1}>
                  <div className={styles.row1}>
                    <div className={styles.row1__item}>
                      <div className={styles.box3}>
                        <h1 className={styles.hero_title2}>Resume the Trip</h1>
                      </div>
                    </div>
                    <div className={styles.row1__spacer} />
                    <div className={styles.row1__item1}>
                      <div className={styles.col}>
                        <h1 className={styles.big_title}>4 minutes until arrival</h1>
                        <div className={styles.col__item}>
                          <img
                            className={styles.image3}
                            src={require('assets/08b3996eddb6c36fdaa059ba1fc1c170.png')}
                            alt="alt text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.col1__item}>
                    <img
                      className={styles.image4}
                      src={require('assets/f848d87624e442d3e2ea0cad963dc777.png')}
                      alt="alt text"
                    />
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
              <h1 className={styles.hero_title}>Help</h1>
            </div>

            <div className={styles.box1}>
              <div className={styles.col3}>
                <div className={styles.content_box2}>
                  <h1 className={styles.big_title1}>Pair Your Device</h1>
                  <img
                    className={styles.icon}
                    src={require('assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                    alt="alt text"
                  />
                </div>

                <div className={styles.content_box11}>
                  <h1 className={styles.big_title2}>Entertainment</h1>
                  <img
                    className={styles.image}
                    src={require('assets/f4d60d68371ca42c21aa921fff8977b0.png')}
                    alt="alt text"
                  />
                </div>

                <div className={styles.content_box12}>
                  <h1 className={styles.big_title3}>Vehicle Setting</h1>
                  <img
                    className={styles.image1}
                    src={require('assets/fb6be168fd17fa501787444db8acbdf0.png')}
                    alt="alt text"
                  />
                </div>

                <div className={styles.content_box3}>
                  <h1 className={styles.big_title4}>Call</h1>
                  <img
                    className={styles.image2}
                    src={require('assets/0578a54ea8c9f67302705ecc395c12e5.png')}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
