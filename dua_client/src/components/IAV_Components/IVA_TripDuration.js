import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from '../../css/IVA_TripDuration.module.scss';

export default function IVA_TripDuration(props) {
  return (
    <div className={cn(styles.group, 'iva-trip-duration')}>
      <img className={styles.image} src={require("../../assets/08b3996eddb6c36fdaa059ba1fc1c170.png")} alt="alt text" />
      <h1 className={styles.big_title}>{props.tripTime}</h1>
    </div>
  );
}

IVA_TripDuration.propTypes = {
  tripTime: PropTypes.string.isRequired
};


