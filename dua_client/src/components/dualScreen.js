import React, { Component, useState, useEffect, useCallback} from 'react'
import "../css/styles.css";

import TestInteractables from "./TestInteractables"
import TestDisplay from "./TestDisplay"

export default function DualScreen () {

  const handleVid = (vidKey) => {

    //get the desired video tag elements
    const prevPlayer = document.getElementsByClassName('shown').item(0);
    const player = document.getElementById(vidKey).parentNode;

    //cycle them off and on
    player.classList.toggle('hidden');
    player.classList.toggle('shown');
    prevPlayer.classList.toggle('shown');
    prevPlayer.classList.toggle('hidden'); 

    //pause the video that gets hidden
    console.log(prevPlayer.firstChild);
    console.log(player.firstChild);

    prevPlayer.firstChild.pause(); 
    player.firstChild.play(); 
  }

  const handleKeyPress = useCallback((event) => {

    const curScreen = document.getElementById('BD0');
    const video = document.getElementsByClassName('shown').item(0).firstChild;  

      //if spacebar pause
    if( event.keyCode == 32 ){
      if(video.paused){
        document.getElementsByClassName('shown').item(0).firstChild.play();
      }else{
        document.getElementsByClassName('shown').item(0).firstChild.pause();
      }
    }
    if(event.keyCode == 49){//1
        handleVid('myVid1');
    }
    if(event.keyCode == 50){//2
        handleVid('myVid2');
    }
    if(event.keyCode == 51){//3
        handleVid('myVid3');
    }
    if(event.keyCode == 52){//4
        handleVid('myVid4');
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

  return(
    <div className = "TestingDisplay">

      <div className = "screen0">
        <TestInteractables/>
      </div>

      <div className = "screen1">
        <TestDisplay/>
      </div>

    </div>
    );

}