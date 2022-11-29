import React from 'react';
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Screen1.module.scss';

export default function Screen1(props) {
  return (
    <div className={cn(styles.root, 'screen1')}>
      <h1 className={styles.big_title1}>Monday, Jan 16, 10:30 AM</h1>

      <div className={styles.row}>
        <div className={styles.box}>
          <h1 className={styles.big_title11}>
            {' '}
            Trip to Walgreens                                                                 You will arrive at 10:35
            AM
          </h1>

          <div className={styles.col}>
            <div className={styles.row1}>
              <div className={styles.content_box4}>
                <h1 className={styles.big_title}>Change the Destination</h1>
              </div>

              <div className={styles.row1__spacer} />

              <div className={styles.col1}>
                <h1 className={styles.big_title2}>5 minutes until arrival</h1>
                <div className={styles.col1__item}>
                  <img
                    className={styles.image}
                    src={require("../assets/08b3996eddb6c36fdaa059ba1fc1c170.png")}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>

            <div
              className={styles.image4}
              style={{ '--src': `url(${require("../assets/d49ab9c641275a20c4d14b1f6ceb3dc7.png")})` }}
            />
          </div>
        </div>

        <div className={styles.row__spacer} />

        <div className={styles.col2}>
          <div className={styles.box2}>
            <h1 className={styles.hero_title}>Help</h1>
          </div>

          <div className={styles.group}>
            <div className={styles.col3}>
              <div className={styles.group1}>
                <div className={styles.content_box3}>
                  <img
                    className={styles.icon}
                    src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                    alt="alt text"
                  />
                </div>

                <h1 className={cn(styles.big_title3, 'big_title')}>Pair Your Device</h1>
              </div>

              <div className={styles.group2}>
                <div className={styles.content_box2}>
                  <img
                    className={styles.image1}
                    src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                    alt="alt text"
                  />
                </div>

                <h1 className={styles.big_title4}>Entertainment</h1>
              </div>

              <div className={styles.group3}>
                <div className={styles.content_box1}>
                  <img
                    className={styles.image2}
                    src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                    alt="alt text"
                  />
                </div>

                <h1 className={styles.big_title5}>Vehicle Setting</h1>
              </div>

              <div className={styles.group4}>
                <div className={styles.content_box}>
                  <img
                    className={styles.image3}
                    src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                    alt="alt text"
                  />
                </div>

                <h1 className={styles.big_title6}>Call</h1>
              </div>
            </div>

            <div className={styles.box1} />
          </div>
        </div>
      </div>
    </div>
  );
}