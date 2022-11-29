import React, { useEffect, useCallback} from 'react'
import cn from 'classnames';
import "../css/styles.css";

import styles from '../css/Trial_1.module.scss';

import Screen1 from "./Screen1.js";
import Screen2 from "./Screen2.js";
import Screen3 from "./Screen3.js";
import Screen4 from "./Screen4.js";
import Screen5 from "./Screen5.js";



export default function Trial2() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "grey";

    return() => {
      document.body.style.overflow = "visible"; 
      document.body.style.backgroundColor ="white";
    }
  },[])
  return (
    <div className = "screen-holder">
      <a href="/IAV3" className = "screenLink">
        <Screen2/>
      </a>
    </div>
  );
}
