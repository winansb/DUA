import React, { useEffect, useCallback, useRef} from 'react';
import {Link } from 'react-router-dom';

import TestVideoDisplay from "../TestDisplay.js"

import PopOut from './PopOutIframe';

const axiosHandler = require("../hooks/AxiosHandler.js");


export default function VideoPopOut ({ match }) {
    
    const iframeRef = useRef(null); 

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

    const player = iframeRef.current;
    const playerWindow = window.open("", "PlayerWindow", "height=500,width=500");
    console.log({player});
    playerWindow.document.body.appendChild(player);


    //runs on dismount
    return () => {
        //remove event listeners
        document.removeEventListener('keydown', handleKeyPress);
        iframeRef.current.remove();
    };
    }, [handleKeyPress]);


    return (
    <div className = "TestingDisplay">
        <PopOut videoSrc={match}></PopOut>
    </div>
    );
};