import React, { Component, useState, useEffect, useCallback} from 'react'
import {useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
import video1 from "../Videos/Demo0.mp4"
import video2 from "../Videos/Demo1.mp4"
import video3 from "../Videos/Demo2.mp4"
import video4 from "../Videos/Demo3.mp4"

import VideoComponent from "./hooks/VideoComponent.js"

const axiosHandler = require("../components/hooks/AxiosHandler.js");



export default function TestVideoDisplay () {

	let Video_Index =0; 

	function checkPause() {
		const promise = axiosHandler.getPause();

		promise.then(res => {
			console.log(res.data);
			return res.data; 
		})

	}

	function getVideoChange() {

		const promise = axiosHandler.fetchVideoChange(Video_Index); 


		promise.then(res => {
			console.log(res.data);
			//set next check point in seconds 
			setNextCheck(res.data);
			return res.data;
		});

	}

	function setNextCheck(next){
		const interval = setInterval(() => {
    checkPause(); 
  }, next*1000);
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
		const startVid = document.getElementById('myVid1').parentNode;
		startVid.classList.toggle('shown'); 
		startVid.classList.toggle('hidden');

		//add event listeners to videos
		document.getElementById('myVid1').addEventListener('ended', (event) =>{
			handleVid('myVid2')
		});
		document.getElementById('myVid2').addEventListener('ended', (event) =>{
			handleVid('myVid3')
		});
		document.getElementById('myVid3').addEventListener('ended', (event) =>{
			handleVid('myVid4')
		});
		document.getElementById('myVid4').addEventListener('ended', (event) =>{
			handleVid('myVid1')
		});

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
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

	return(
		<div className = "Video">
				<VideoComponent  Key="myVid1" Source={video1}/>
				<VideoComponent  Key="myVid2" Source={video2}/>
				<VideoComponent  Key="myVid3" Source={video3}/>
				<VideoComponent  Key="myVid4" Source={video4}/>
		</div>
	);
}




	//db request for everything goes here 
	//const data = {video1Key: video1data, ...};
	//const decompose = ({ data }) =>
		// Objects.entries(data).map(([k,v]) => (
		// 	<div key={k}>
		// 		{k}: {v}
		// 	</div>
		// 		));
	// render( 
		// 	<decompose data={data} />
		// 	);

