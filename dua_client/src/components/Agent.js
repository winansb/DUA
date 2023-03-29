import React, { useEffect, useCallback, useRef} from 'react';
import {Link } from 'react-router-dom';
import "../css/styles.css";

import Detour0 from './Tests/Detour/Detour0.js';
import Detour1 from './Tests/Detour/Detour1.js';
import Detour2 from './Tests/Detour/Detour2.js';
import Detour3 from './Tests/Detour/Detour3.js';
import Detour4 from './Tests/Detour/Detour4.js';
import Detour5 from './Tests/Detour/Detour5.js';
import Detour6 from './Tests/Detour/Detour6.js';
import Detour7 from './Tests/Detour/Detour7.js';
import Detour8 from './Tests/Detour/Detour8.js';
import Detour9 from './Tests/Detour/Detour9.js';
import Detour10 from './Tests/Detour/Detour10.js';
import Detour11 from './Tests/Detour/Detour11.js';
import Detour12 from './Tests/Detour/Detour12.js';
import Detour13 from './Tests/Detour/Detour13.js';

import Timer from './hooks/Timer';


const axiosHandler = require("./hooks/AxiosHandler.js");


const  TestInteractables = () => {

  const pre1 =1;
  const pre2 =1;
  const pre3 =1;

  const now = new Date(); 

  let paused = true;

  let curScreen = null;  

  let trialDuration = 0; 

  const dateOptions = { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const timeOptions = { 
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const date = now.toLocaleDateString('en-US', dateOptions);

  const parsedTime1 = new Date(date);
  var trialLength = 1000 * 60 * 5 ; //for now an estimate in miliseconds 
  const totalTimeMS = parsedTime1.getTime() + trialLength; 
  const totalTime = new Date(totalTimeMS); 

  const arrivalTime = totalTime.toLocaleTimeString('en-US', timeOptions)

  const arrival = `You will arrive at ${arrivalTime}`;

  const tripTimeRemaining = 'minutes until arrival'; 
  
  let destination = 'Trip to Walgreens'; 

  let tripInfoETA = 'ETA: 3 Minutes';

  let tripInfoDestination = 'Destination: Walgreens';

  const EmergencyContact = 'Static'; 

  

  // function updateTrialTimeInfo(startTime, trialLengthMs) {
    
  //   const curTime = new Date(); 
  //   const newDate = curTime.toLocaleDateString('en-US', dateOptions);
  //   const newTime = curTime.to

  //   let elapsedTimeMs =  curTime - startTime; //in ms
  //   let TimeLeftMin = (trialLengthMs-elapsedTimeMs)/(1000*60); //get time left in trial, convert it to minutes

  //   const date1 = document.getElementById('date1');
  //   const date2 = document.getElementById('date2');
  //   const date3 = document.getElementById('date3');
  //   const date4 = document.getElementById('date4');
  //   const date5 = document.getElementById('date5');
  //   const date6 = document.getElementById('date6');
  //   const date7 = document.getElementById('date7');

  //   date1.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date2.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date3.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date4.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date5.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date6.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);
  //   date7.innerHTML = curTime.toLocaleTimeString('en-US', timeOptions);


  //   const arrival1 = document.getElementById('arrival1');
  //   const arrival2 = document.getElementById('arrival2');
  //   const arrival3 = document.getElementById('arrival3');
  //   const arrival4 = document.getElementById('arrival4');
  //   const arrival5 = document.getElementById('arrival5');
  //   const arrival6 = document.getElementById('arrival6');
  //   const arrival7 = document.getElementById('arrival7');

  //   const destination1 = document.getElementById('destination1');
  //   const destination2 = document.getElementById('destination2');
  //   const destination3 = document.getElementById('destination3');
  //   const destination4 = document.getElementById('destination4');
  //   const destination5 = document.getElementById('destination5');
  //   const destination6 = document.getElementById('destination6');
  //   const destination7 = document.getElementById('destination7');

  //   const tripTimeRemaining1 = document.getElementById('tripTimeRemaining1');
  //   const tripTimeRemaining2 = document.getElementById('tripTimeRemaining2');
  //   const tripTimeRemaining3 = document.getElementById('tripTimeRemaining3');
  //   const tripTimeRemaining4 = document.getElementById('tripTimeRemaining4');
  //   const tripTimeRemaining5 = document.getElementById('tripTimeRemaining5');
  //   const tripTimeRemaining6 = document.getElementById('tripTimeRemaining6');

    
  // }

  //setInterval(updateTrialTimeInfo(now,trialLength), 1000 * 30);//every 30 seconds update the time display interface 

  //axios approach 
  //this function takes in a string for videoKey then makes that video 
  //show on the test display

  //every second we aren't paused count towards our time
  setInterval(function() {
    updateTrialDuration();
    //console.log(trialDuration);
    //console.log(curScreen);
  }, 1000); 

  function updateTrialDuration(){
    if(!paused){
      trialDuration = trialDuration+1; 

      if(trialDuration == 5 ){
        curScreen = 'D0';
        document.getElementById(curScreen).classList.toggle('off');
        document.getElementById(curScreen).classList.toggle('on'); 
      }
      if(trialDuration == 75){
        changeScreen('D1');
      }
      if(trialDuration == 80 && curScreen == 'D1'){
        changeScreen('D2');
      }
      if(trialDuration == 85 && curScreen == 'D2' && pre1 == 1){
        changeScreen('D3');
      }
      if(trialDuration == 100 && curScreen == 'D3' && pre2 == 1){
        changeScreen('D5'); 
      }
      if(trialDuration == 115 && curScreen == 'D5' && pre3 ==1){
        changeScreen('D7'); 
      }
      if(trialDuration == 130 && curScreen == 'D7'){
        changeScreen('D9'); 
      }
      if(trialDuration == 145 && curScreen == 'D9'){
        changeScreen('D10')
      }
      if(trialDuration == 145 && curScreen == 'D4'){
        changeScreen('D10')
      }
      if(trialDuration == 145 && curScreen == 'D6'){
        changeScreen('D10')
      }
      if(trialDuration == 145 && curScreen == 'D8'){
        changeScreen('D10')
      }
      if(trialDuration == 160 && curScreen == 'D10'){
        changeScreen('D12'); 
      }
      if(trialDuration == 185 && curScreen == 'D12'){
        changeScreen('D13'); 
      }
    }
  } 

  function sendVideoChange(videoKey) {

    const promise = axiosHandler.sendVideoChange(videoKey);
  }

  function sendPause(pause) {

    const promise = axiosHandler.sendPause(pause);

  }

  function Detour1_Ok() {
    changeScreen('D2'); 
  }

  function Detour2_Ok() {
    changeScreen('D3'); 
  }

  function Detour3_Yes() {
    changeScreen('D4'); 
  }

  function Detour3_No() {
    changeScreen('D5'); 
  }

  function Detour4_Ok(){
    changeScreen('D10'); 
  }

  function Detour5_Yes(){
    changeScreen('D6'); 
    sendVideoChange('DETOUR_W_HOUSE'); 
  }

  function Detour5_No(){
    changeScreen('D7'); 
  }

  function Detour6_Ok(){
    changeScreen('D10'); 
  }

  function Detour7_Yes(){
    changeScreen('D8'); 
    sendVideoChange('DETOUR_HOME')
  }

  function Detour7_No(){
    changeScreen('D9'); 
  }

  function Detour8_Ok(){
    changeScreen('D10'); 
  }

  function Detour9_Ok(){
    changeScreen('D10'); 
  }

  function Detour10_Yes(){
    changeScreen('D11'); 
    paused = !paused; 
    sendPause(paused); 
    
  }

  function Detour10_No(){
    changeScreen('D12'); 
  }

  function Detour11_EndCall(){
    changeScreen('D12');
  }

  function Detour12_Ok(){
    changeScreen('D13'); 
  }

	function handleTimer(timeElapsed) {
		return timeElapsed; 
	}


  function changeScreen(newScreen){

    const nScreen = document.getElementById(newScreen);
    const cScreen = document.getElementById(curScreen);         

    if(nScreen != curScreen){
      cScreen.classList.toggle('on');
      cScreen.classList.toggle('off');

      nScreen.classList.toggle('on');
      nScreen.classList.toggle('off');

      curScreen = newScreen; 
    }
  }

  const handleKeyPress = useCallback((event) => {

    console.log(event.keyCode);

    if(event.keyCode == 32){//spacebar, start trial 

      paused = !paused; 
      sendPause(paused); 
    }
    if(event.keyCode == 38){//up arrow, test send vid

      sendVideoChange('DETOUR_W_HOUSE'); 
    }
  })


  //runs on mount
  useEffect(() => {

    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('message', (event) => {
      const data = event.data; 
      console.log(`Received data from server webSocket: ${data}`);
    }); 

    //add event listeners to videos
    document.addEventListener('keydown', handleKeyPress); 

    //make it look nicer
    document.body.style.backgroundColor = 'black';

    //runs on dismount
    return () => {
      //remove event listeners
      socket.close(); 
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.backgroundColor = '';
    };
  }, [handleKeyPress]);


  return (
    <div className = "TestingDisplay">
      <div className = "Interact">
        <div className = "timer off" >
           	<Timer onTimeElapsed={handleTimer} />
        </div>
        <div id="D0" className = "off">
            <Detour0 date={date} destination={destination} ArrivalTime={arrival} TripTimeRemaining={tripTimeRemaining} />
        </div>
        <div id="D1" className = "off">
            <Detour1 date={date} destination={destination} ArrivalTime={arrival} Detour1_Ok={Detour1_Ok} />
        </div>
        <div id="D2" className = "off">
            <Detour2 date={date} destination={destination} ArrivalTime={arrival} Detour2_Ok={Detour2_Ok} />
        </div>
        <div id="D3" className = "off">
            <Detour3 ArrivalTime={arrival} Detour3_Yes={Detour3_Yes} Detour3_No={Detour3_No} />
        </div>
        <div id="D4" className = "off">
            <Detour4 TripTimeRemaining={tripTimeRemaining} Detour4_Ok={Detour4_Ok} />
        </div>
        <div id="D5" className = "off">
            <Detour5 ArrivalTime={arrival} Detour5_Yes={Detour5_Yes} Detour5_No={Detour5_No} />
        </div>
        <div id="D6" className = "off">
            <Detour6 TripTimeRemaining={tripTimeRemaining} Detour6_Ok={Detour6_Ok} />
        </div>
        <div id="D7" className = "off">
            <Detour7 ArrivalTime={arrival} Detour7_Yes={Detour7_Yes} Detour7_No={Detour7_No} />
        </div>
        <div id="D8" className = "off">
            <Detour8 TripTimeRemaining={tripTimeRemaining} Detour8_Ok={Detour8_Ok} />
        </div>
        <div id="D9" className = "off">
            <Detour9 TripTimeRemaining={tripTimeRemaining} Detour9_Ok={Detour9_Ok} />
        </div>
        <div id="D10" className = "off">
            <Detour10 date={date} destination={destination} ArrivalTime={arrival} Detour10_Yes={Detour10_Yes} Detour10_No={Detour10_No} />
        </div>
        <div id="D11" className = "off">
            <Detour11 date={date} destination={destination} ArrivalTime={arrival} EmergencyContact={EmergencyContact} tripInfoDestination={tripInfoDestination} tripInfoETA={tripInfoETA} Detour11_EndCall={Detour11_EndCall} />
        </div>
        <div id="D12" className = "off">
            <Detour12 date={date} destination={destination} ArrivalTime={arrival} Detour12_Ok={Detour12_Ok} />
        </div>
        <div id="D13" className = "off">
            <Detour13 date={date} destination={destination} ArrivalTime={arrival} TripTimeRemaining={tripTimeRemaining} />
        </div>
      </div>
    </div>
  );
};
export default TestInteractables;







