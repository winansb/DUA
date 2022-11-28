import React, { Component, useEffect, useCallback} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
import video1 from "../Videos/driving_sim_place_holder.mp4"
import video2 from "../Videos/testVid1.mp4"
import video3 from "../Videos/testVid2.mp4"
import video4 from "../Videos/testVid3.mp4"

import VideoComponent from "./VideoComponent.js"


export default function VideoPageOne () {

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


	const handleKeyPress = useCallback((event) => {
		//get list of visible elements
		const visibleVids = document.getElementsByClassName('shown');
		//case first run
		if(visibleVids.length == 0){
			//default to show first video
			const startVid = document.getElementById('myVid1').parentNode;
			startVid.classList.toggle('shown'); 
			startVid.classList.toggle('hidden');
		}
		else{
			//get the current showing video
			const visibleVids = document.getElementsByClassName('shown');
			const visibleVid = visibleVids.item(0); 

			//turn on the desired video
			if (event.keyCode == 49 && !visibleVid.parentNode.classList.contains('myVid1') ){
				handleVid("myVid1");
			}
			if (event.keyCode == 50 && !visibleVid.parentNode.classList.contains('myVid2') ){
				handleVid("myVid2");
			}
			if (event.keyCode == 51 && !visibleVid.parentNode.classList.contains('myVid3') ){
				handleVid("myVid3");
			}
			if (event.keyCode == 52 && !visibleVid.parentNode.classList.contains('myVid4') ){
				handleVid("myVid4");
			}
		}
	}, []); 

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress); 

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

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
		<div className="container fullScreen videoPlayers">
			<VideoComponent Key="myVid1" Source={video1}/>
			<VideoComponent Key="myVid2" Source={video2}/>
			<VideoComponent Key="myVid3" Source={video3}/>
			<VideoComponent Key="myVid4" Source={video4}/>
		</div>
	);
}

