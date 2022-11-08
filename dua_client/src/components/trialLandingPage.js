import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function WaitingPage () {
	return(

	<div className="container-fluid text-center">

		<h1 className= "waiting" >Please wait while we get your test ready</h1>

		<a href="/testingSetup">
			<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
		</a>

	</div>
	)
}