import React, { Component, useEffect, useState, useRef} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
//import '~video-react/dist/video-react.css'
//import { Player } from 'video-react'; 
import video from "../Videos/driving_sim_place_holder.mp4"
import VideoPlayer from "./VideoPlayer.js"


export default function VideoPageOne () {
	return (
	 	<VideoPlayer />
	);
}


