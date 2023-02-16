import React from "react";
import PopOut from './hooks/PopOutIframe';


// bootstrap css import
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function WelcomePage() {
	return (
		<div className="container-fluid text-center p-2">

			<h1 className= "header" >Welcome</h1>

			<div className="container p-2">
				<a href="/testingSetup">
					<button className="btn btn-primary dua-btn" >Start New Trial</button>{' '}
				</a>
			</div>

			<div className="container p-2">
				<a href="/placeHolder">
					<button className="btn btn-primary dua-btn" >Export Data</button>{' '}
				</a>
			</div>

			<div className="container p-2">
				<a href="/placeHolder">
					<button className="btn btn-primary dua-btn" >Edit Test</button>{' '}
				</a>
			</div>
		</div>
	);
}

