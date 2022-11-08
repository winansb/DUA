//This page is what the participants in the study will interact with during 
//a trial


import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function TestSetupPage () {
	return(

	<div className="container-fluid text-center">

		<h1 className= "header" >Trial Setup</h1>

		<div className="container p-2">
			<a href="/waiting">
				<button className="btn btn-primary project-btn" >Participant Page</button>{' '}
			</a>
		</div>

		<div className="container p-2">
			<a href="/adminSetup">
				<button  className="btn btn-primary project-btn" >Admin Page</button>{' '}
			</a>
		</div>

			<a href="/">
				<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
			</a>
			
	</div>
	)
}

