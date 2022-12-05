import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen0.module.scss';

export default function Screen0(props) {
  return (
    <div className={cn(styles.root, 'screen0')}>
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
              <div className={styles.row1__item}>
                <div className={styles.content_box4}>
                  <px-grid track-style="flex-grow: 1;" x="42fr 366fr 42fr" y="27px minmax(0px, 41fr) 32px">
                    <h1 className={styles.big_title}>Change the Destination</h1>
                  </px-grid>
                </div>
              </div>
              <div className={styles.row1__spacer} />

              <div className={styles.col1}>
                <px-grid x="101fr 593fr 70fr" y="0px minmax(0px, 43fr) 0px">
                  <h1 className={styles.big_title}>5 minutes until arrival</h1>
                </px-grid>
                <div className={styles.col1__item}>
                  <img
                    className={styles.image}
                    src={require("../assets/08b3996eddb6c36fdaa059ba1fc1c170.png")}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>

            <px-grid x="93fr 1077fr 98fr" y="38px 544px 0px">
              <div
                className={styles.image4}
                style={{ '--src': `url(${require("../assets/d49ab9c641275a20c4d14b1f6ceb3dc7.png")})` }}
              />
            </px-grid>
          </div>
        </div>

        <div className={styles.row__spacer} />

        <div className={styles.col2}>
          <div className={styles.col2__item}>
            <div className={styles.box2}>
              <px-grid track-style="flex-grow: 1;" x="109fr 300fr 109fr" y="40px minmax(0px, 36fr) 40px">
                <h1 className={styles.hero_title}>Help</h1>
              </px-grid>
            </div>
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

                <h1 className={cn(styles.big_title2, 'big_title')}>Pair Your Device</h1>
              </div>

              <div className={styles.col3__item}>
                <div className={styles.group2}>
                  <div className={styles.content_box2}>
                    <img
                      className={styles.image1}
                      src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                      alt="alt text"
                    />
                  </div>

                  <px-grid x="100fr 253fr 99fr" y="40px minmax(0px, 40fr) 29px" absolute>
                    <h1 className={styles.big_title3}>Entertainment</h1>
                  </px-grid>
                </div>
              </div>
              <div className={styles.col3__item}>
                <div className={styles.group3}>
                  <div className={styles.content_box1}>
                    <img
                      className={styles.image2}
                      src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                      alt="alt text"
                    />
                  </div>

                  <px-grid x="61fr 330fr 61fr" y="42px minmax(49px,49fr) 18px" absolute>
                    <h1 className={styles.big_title3}>Vehicle Setting</h1>
                  </px-grid>
                </div>
              </div>
              <div className={styles.col3__item}>
                <div className={styles.group4}>
                  <div className={styles.content_box}>
                    <img
                      className={styles.image3}
                      src={require("../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                      alt="alt text"
                    />
                  </div>

                  <px-grid x="133fr 169fr 150fr" y="33px minmax(0px, 43fr) 32px" absolute>
                    <h1 className={styles.big_title3}>Call</h1>
                  </px-grid>
                </div>
              </div>
            </div>

            <div className={styles.box1} />
          </div>
        </div>
      </div>
    </div>
  );
}