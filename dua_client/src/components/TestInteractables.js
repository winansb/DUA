import React, { useEffect, useCallback, useRef} from 'react';
import {Link } from 'react-router-dom';
import "../css/styles.css";

import Breakdown0 from './Tests/Breakdown/Breakdown0.js';
import Breakdown1 from './Tests/Breakdown/Breakdown1.js';
import Breakdown2 from './Tests/Breakdown/Breakdown2.js';
import Breakdown3 from './Tests/Breakdown/Breakdown3.js';
import Breakdown4 from './Tests/Breakdown/Breakdown4.js';
import Breakdown5 from './Tests/Breakdown/Breakdown5.js';
import Breakdown6 from './Tests/Breakdown/Breakdown6.js';
import Breakdown7 from './Tests/Breakdown/Breakdown7.js';
import Breakdown8 from './Tests/Breakdown/Breakdown8.js';
import Breakdown9 from './Tests/Breakdown/Breakdown9.js';
import Breakdown10 from './Tests/Breakdown/Breakdown10.js';

import TestVideoDisplay from "./TestDisplay.js"

const axiosHandler = require("../components/hooks/AxiosHandler.js");


export default function TestInteractables(props) {

  let paused = false; 

  //axios approach 
  //this function takes in a string for videoKey then makes that video 
  //show on the test display
  function sendVideoChange(videoKey) {

    const promise = axiosHandler.sendVideoChange(videoKey);
  }

  function sendPause(pause) {

    const promise = axiosHandler.sendPause(pause);

    return; 
  }


  function changeScreen(curScreen, newScreen){

    const cScreen = document.getElementById(curScreen); 
    const nScreen = document.getElementById(newScreen);        

    
    cScreen.classList.toggle('on');
    cScreen.classList.toggle('off');

    nScreen.classList.toggle('on');
    nScreen.classList.toggle('off');
  }

  const handleKeyPress = useCallback((event) => {

    console.log(event.keyCode);

    if(event.keyCode == 32){//spacebar
      paused = !paused; 
      sendPause(paused); 
    }

  })


  //runs on mount
  useEffect(() => {

    //add event listeners to videos
    document.addEventListener('keydown', handleKeyPress); 


    //runs on dismount
    return () => {
      //remove event listeners
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);


  return (
    <div className = "TestingDisplay">
      <div className = "Interact">
        <div id="BD0" className = "on">
            <Breakdown0/>
        </div>
        <div id="BD1" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD2" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD3" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD4" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD5" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD6" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD7" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD8" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD9" className = "off">
            <Breakdown0/>
        </div>
        <div id="BD10" className = "off">
            <Breakdown0/>
        </div>
      </div>
    </div>
  );
}







