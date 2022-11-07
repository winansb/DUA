import React from "react";

// bootstrap css import
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function WelcomePage() {
	return (
		<div className="container-fluid dua-general">
			<h1 className= "header" >Welcome</h1>

			<a href="/testingSetup">
				<button className="btn btn-primary dua-btn" >Start New Trial</button>{' '}
			</a>

			<div>
				<a href="/placeHolder">
					<button className="btn btn-primary dua-btn" >View Data</button>{' '}
				</a>
			</div>

			<div>
				<a href="/placeHolder">
					<button className="btn btn-primary dua-btn" >Edit Test</button>{' '}
				</a>
			</div>

			<div>
				<a href="/placeHolder">
					<button className="btn btn-primary dua-btn" >Upload</button>{' '}
				</a>
			</div>

		</div>
	);
}

