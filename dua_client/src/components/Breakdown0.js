import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import IVA_TripDuration from "../components/IAV_Components/IVA_TripDuration.js";
import IVA_Menu from "../components/IAV_Components/IVA_Menu.js";

import styles from '../css/Breakdown0.module.scss';

export default function Breakdown0(props) {
  return (
    <div className={cn(styles.root, 'breakdown0')}>
      <div className={styles.flexRow}>
        <div className={styles.flexRow__item}>
          <div className={styles.flexCol}>
            <div className={styles.flexCol__item}>
              <h1 className={styles.big_title1}>{props.date}</h1>
            </div>

            <div className={styles.box}>
              <h1 className={styles.big_title11}>{props.arrivalTime}</h1>

              <div className={styles.flexCol1}>
                <div className={styles.flexRow1}>
                  <div className={styles.flexRow1__item}>
                    <div className={styles.content_box}>
                      <h1 className={styles.big_title}>Change the Destination</h1>
                    </div>
                  </div>
                  <div className={styles.flexRow1__spacer} />
                  <div className={styles.flexRow1__item1}>
                    <div className={styles.component}>
                      <IVA_TripDuration tripTime={``} />
                    </div>
                  </div>
                </div>

                <div className={styles.flexCol1__item}>
                  <img
                    className={styles.image4}
                    src={require("../assets/d49ab9c641275a20c4d14b1f6ceb3dc7.png")}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexRow__spacer} />
        <div className={styles.flexRow__item1}>
          <div className={styles.component1}>
            <IVA_Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

Breakdown0.propTypes = {
  date: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired
};

