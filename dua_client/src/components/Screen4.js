import React from 'react';
import cn from 'classnames';

import styles from '../css/Screen4.module.scss';

export default function Screen4(props) {
  return (
    <div className={cn(styles.root, 'screen4')}>
      <div className={styles.row}>
        <div className={styles.row__item}>
          <div className={styles.col}>
            <div className={styles.col__item}>
              <div className={styles.content_box}>
                <px-grid track-style="flex-grow: 1;" x="29fr 1179fr 42fr" y="23px minmax(114px,114fr) 19px">
                  <h1 className={styles.hero_title1}>We are pulling over the vehicle</h1>
                </px-grid>
              </div>
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
                        <px-grid
                          x="86fr 593fr 85fr"
                          y="0px minmax(0px, 42fr) 0px"
                          sm-x="86fr 791fr 85fr"
                          sm-y="0px minmax(0px, 42fr) 0px"
                          xs-x="86fr 1055fr 85fr"
                          xs-y="0px minmax(0px, 42fr) 0px"
                          xxs-x="86fr 1407fr 85fr"
                          xxs-y="0px minmax(0px, 42fr) 0px"
                          tn-x="86fr 1876fr 85fr"
                          tn-y="0px minmax(0px, 42fr) 0px">
                          <h1 className={styles.big_title}>4 minutes until arrival</h1>
                        </px-grid>
                        <div className={styles.col__item1}>
                          <img
                            className={styles.image3}
                            src={require("../assets/08b3996eddb6c36fdaa059ba1fc1c170.png")}
                            alt="alt text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.col1__item}>
                    <px-grid track-style="flex-grow: 1;" x="113fr 921fr 159fr" y="13px minmax(0px, max-content) 0px">
                      <img
                        className={styles.image4}
                        src={require("../assets/f848d87624e442d3e2ea0cad963dc777.png")}
                        alt="alt text"
                      />
                    </px-grid>
                  </div>
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
                <div className={styles.col3__item}>
                  <div className={styles.content_box2}>
                    <px-grid track-style="flex-grow: 1;" x="117fr 293fr 42fr" y="29px minmax(0px, 41fr) 38px">
                      <h1 className={styles.big_title}>Pair Your Device</h1>
                    </px-grid>
                    <img
                      className={styles.icon}
                      src={require("../assets/12a1471311a7e43d1bfbf57dc8fd1411.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col3__item}>
                  <div className={styles.content_box11}>
                    <px-grid track-style="flex-grow: 1;" x="100fr 253fr 99fr" y="40px minmax(0px, 42fr) 27px">
                      <h1 className={styles.big_title}>Entertainment</h1>
                    </px-grid>
                    <img
                      className={styles.image}
                      src={require("../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col3__item}>
                  <div className={styles.content_box12}>
                    <px-grid
                      track-style="flex-grow: 1;"
                      x="61fr 330fr 61fr"
                      y="42px minmax(49px,49fr) 18px"
                      tn-x="61fr 440fr 61fr"
                      tn-y="42px minmax(49px,49fr) 18px">
                      <h1 className={styles.big_title}>Vehicle Setting</h1>
                    </px-grid>
                    <img
                      className={styles.image1}
                      src={require("../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                      alt="alt text"
                    />
                  </div>
                </div>
                <div className={styles.col3__item}>
                  <div className={styles.content_box3}>
                    <px-grid track-style="flex-grow: 1;" x="133fr 169fr 150fr" y="33px minmax(43px,43fr) 32px">
                      <h1 className={styles.big_title}>Call</h1>
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
