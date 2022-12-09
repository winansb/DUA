import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './IVA_date.module.scss';

export default function IVA_date(props) {
  return (
    <div className={cn(styles.group, 'iva-date')}>
      <h1 className={styles.big_title1}>{props.date}</h1>
    </div>
  );
}

IVA_date.propTypes = {
  date: PropTypes.string.isRequired
};
