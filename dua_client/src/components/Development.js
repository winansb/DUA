import React, { Component, useState, useEffect, useCallback} from 'react'
import "../css/styles.css";

import TestInteractables from "./Agent"
import TestDisplay from "./TestDisplay"

import Detour_start from "../Videos/Detour_Construction.mp4"

export default function Dev () {

  const socket = new WebSocket('ws://localhost:8080');

  socket.addEventListener('open', (event) => {
    console.log('WebSocket connected');
  });
  
  socket.addEventListener('message', (event) => {
    event.data.text().then((text) => {
      console.log(`Received data from server: ${text}`); 
    })
  });
  
  socket.addEventListener('close', (event) => {
    console.log('WebSocket disconnected');
  });
  
  socket.addEventListener('error', (event) => {
    console.error('WebSocket error', event);
  });


  const handleKeyPress = useCallback((event) => {
      //if spacebar pause
    // if( event.keyCode == 32 ){
    // }
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

    </div>
    );

}