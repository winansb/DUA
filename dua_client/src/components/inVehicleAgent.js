import React, { useEffect, useCallback} from 'react'
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Trial_1.module.scss';
import Screen1 from './Screen1.js'

export default function Trial1() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "grey";

    return() => {
      document.body.style.overflow = "visible"; 
      document.body.style.backgroundColor ="white";
    }
  },[])
  return (
    <div className = "my-auto screen-holder">
        <Screen1/>
    </div>
  );
}
