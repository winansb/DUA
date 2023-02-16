import React, { Component, useState, useEffect, useCallback} from 'react'
import {useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";

import DETOUR_START from "../Videos/Detour_Construction.mp4"
import DETOUR_HOME from "../Videos/Detour_Home.mp4"
import DETOUR_W_HOUSE from "../Videos/Detour_Waffle_House.mp4"
import DETOUR_WALGREENS from "../Videos/Detour_Walgreen.mp4"

import VideoComponent from "./hooks/VideoComponent.js"

import Timer from './hooks/Timer';

const axiosHandler = require("../components/hooks/AxiosHandler.js");



export default function TestVideoDisplay () {

	let Video_Index = 0; 
	let pausedNow = 1;
	let currentVideo = "DETOUR_START";  
	let trialDuration = 0; 
	let nextVideo ="DETOUR_WALGREENS"

	  //every second we aren't paused count towards our time
	  setInterval(function() {
		updateTrialDuration();
		console.log(trialDuration);
	  }, 1000); 
	
	  function updateTrialDuration(){
		if(pausedNow == 0){
		  trialDuration = trialDuration+1; 
		  if(trialDuration == 205){
			//time to check what destination video we should use
			nextVideo = getVideoChange(); 
		  }
		}
	  }


	function checkPause() {

		const promise = axiosHandler.getPause();

		promise.then(row => {
			if(pausedNow != row.PAUSE_NOW ){
				const showingVideo = document.getElementsByClassName('shown').item(0).firstChild;
				pausedNow = row.PAUSE_NOW;
				//console.log(showingVideo); 
				if(pausedNow == 0 ){//unpause if paused
					showingVideo.play(); 
				}else{
					showingVideo.pause(); 
				}
			}
			return row; 
		})
	}

	function getVideoChange() {

		const promise = axiosHandler.fetchVideoChange(); 

		promise.then(res => {
			console.log(res.NEXT_VIDEO_PLAYING);
			//handleVid(res.NEXT_VIDEO_PLAYING); 
			return res.NEXT_VIDEO_PLAYING;
		});

	}
	
	function handleTimer(timeElapsed) {
		return timeElapsed; 
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

	})

	useEffect(() => {
		//makes first video show at the start
		document.addEventListener('keydown', handleKeyPress); 
		const startVid = document.getElementById('DETOUR_START').parentNode;
		startVid.classList.toggle('shown'); 
		startVid.classList.toggle('hidden');
		//make the background black to increase immersion
		document.body.style.backgroundColor = 'black';

		document.getElementById('DETOUR_START').addEventListener('timeupdate', function() {
		if (this.currentTime >= 205) {
			handleVid(nextVideo);
		}
		});


		

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
			document.body.style.backgroundColor = '';
		};
	}, [handleKeyPress]);

	//check every second for a pause
	useEffect(() => {
  		const interval = setInterval(() => {
    		checkPause(); 
  		}, 1000);
  		return () => clearInterval(interval);
	}, []);

	const handleVid = (vidKey) => {

		console.log(`attempting change for ${vidKey}`); 

		//get the desired video tag elements
		const prevPlayer = document.getElementsByClassName('shown').item(0);
		const player = document.getElementById(vidKey).parentNode;

		if(prevPlayer != player){
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
		}else{
			console.log(`desired video is already playing`);
		}
	}

	return(
		<div className = "Video">
			    <div className = "timer" >
           			<Timer onTimeElapsed={handleTimer} />
        		</div>
				<VideoComponent  Key="DETOUR_START" Source={DETOUR_START}/>
				<VideoComponent  Key="DETOUR_HOME" Source={DETOUR_HOME}/>
				<VideoComponent  Key="DETOUR_W_HOUSE" Source={DETOUR_W_HOUSE}/>
				<VideoComponent  Key="DETOUR_WALGREENS" Source={DETOUR_WALGREENS}/>
		</div>
	);
}