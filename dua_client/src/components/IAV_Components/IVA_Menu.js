import React from 'react';
import cn from 'classnames';

import styles from '../../css/IVA_Menu.module.scss'


export default function IVA_Menu(props) {
  return (
    <div className={cn(styles.flexCol, 'iva-menu')}>
      <div className={styles.flexCol__item}>
        <div className={styles.box2}>
          <h1 className={styles.hero_title}>Help</h1>
        </div>
      </div>
      <div className={styles.flexCol__item1}>
        <div className={styles.box1}>
          <div className={styles.flexCol1}>
            <div className={styles.content_box4}>
              <div className={styles.flexRow}>
                <div className={styles.flexRow__item}>
                  <img
                    className={styles.icon}
                    src={require('../../assets/12a1471311a7e43d1bfbf57dc8fd1411.png')}
                    alt="alt text"
                  />
                </div>
                <div className={styles.flexRow__spacer} />
                <h1 className={styles.big_title}>Pair Your Device</h1>
              </div>
            </div>

            <div className={styles.content_box3}>
              <div className={styles.flexRow1}>
                <div className={styles.flexRow1__item}>
                  <img
                    className={styles.image1}
                    src={require("../../assets/f4d60d68371ca42c21aa921fff8977b0.png")}
                    alt="alt text"
                  />
                </div>
                <div className={styles.flexRow1__spacer} />
                <h1 className={styles.big_title1}>Entertainment</h1>
              </div>
            </div>

            <div className={styles.content_box2}>
              <div className={styles.flexRow2}>
                <div className={styles.flexRow2__item}>
                  <img
                    className={styles.image2}
                    src={require("../../assets/fb6be168fd17fa501787444db8acbdf0.png")}
                    alt="alt text"
                  />
                </div>
                <div className={styles.flexRow2__spacer} />
                <h1 className={styles.big_title2}>Vehicle Setting</h1>
              </div>
            </div>

            <div className={styles.content_box1}>
              <div className={styles.flexRow3}>
                <div className={styles.flexRow3__item}>
                  <img
                    className={styles.image3}
                    src={require("../../assets/0578a54ea8c9f67302705ecc395c12e5.png")}
                    alt="alt text"
                  />
                </div>
                <div className={styles.flexRow3__spacer} />
                <h1 className={styles.big_title3}>Call</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


