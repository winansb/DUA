import React, { useEffect, useCallback, useRef} from 'react';
import {Link } from 'react-router-dom';
import "../css/styles.css";

import Breakdown0 from './Tests/Breakdown/Breakdown0_cl.js';

import TestVideoDisplay from "./TestDisplay.js"

const axiosHandler = require("../components/hooks/AxiosHandler.js");


export default function TestInteractables(props) {

  //axios approach 
  //this function takes in a string for videoKey then makes that video 
  //show on the test display
  function sendVideoChange(videoKey) {

    const promise = axiosHandler.sendVideoChange('myVid2');
  }

  const handleKeyPress = useCallback((event) => {

    const curScreen = document.getElementById('BD0'); 
    const placeHolder = document.getElementById('placeHolder');

    console.log(curScreen);



    console.log(event.keyCode);

    if(event.keyCode == 53){//5
      //Gonna use this method
      //to swap screens in and out

        //Group to toggle screen1 
        curScreen.classList.toggle('on');
        curScreen.classList.toggle('off');
        //Group to toggle place holder in. This will be other screens 
        //once I am aware what assets the lab would like to move forward with 
        placeHolder.classList.toggle('on');
        placeHolder.classList.toggle('off');



      //sendVideoChange('myVid2'); 
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
    <div>
      <div id="BD0" className = "on">
          <Breakdown0/>
      </div>
      <div id="placeHolder" className="container off"/>
    </div>
  );
}







