import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 
import VideoPopOut from "./hooks/VideoPopOut";
import Detour_start from "../assets/Detour_Construction.mp4";

export default function PlaceHolderPage () {
	return(
		<div className="container-fluid text-center">
		
			<h1 className= "header" >Will be added in later updates</h1>

			<VideoPopOut match={Detour_start} />

			<a href="/">
				<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
			</a>

		</div>
	)
}
