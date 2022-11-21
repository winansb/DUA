import React, { Component, useEffect, useState, useRef} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
//import '~video-react/dist/video-react.css'
//import { Player } from 'video-react'; 
import video from "../Videos/driving_sim_place_holder.mp4"

//possible solution for updating the video src and controlling from a separate page
//https://www.geeksforgeeks.org/how-to-play-pause-video-or-audio-in-reactjs/

export default function VideoPageOne () {
  return (
  	<div className="container-fluid text-center p-0 bg-secondary">
		<video disablepictureinpicture controls  controlslist = "nodownload noremoteplayback noplaybackrate"  className="mw-100 mh-100" >
			<source src={video} type="video/mp4"/>
		</video>
	</div>
  );
}

// export function VideoPageTwo () {
//   return (
//   	<div className="container-fluid text-center p-0 bg-secondary">
//   	<video className="mw-100 mh-100">
//   		<source src={video} type="video/mp4"/>
// 	</video>
// 	</div>
//   );
// }
