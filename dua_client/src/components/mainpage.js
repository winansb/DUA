import React from "react";

// bootstrap css import
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function MainPage() {
	return (
		<div className="container-fluid">
			<h1 className= "test" >Hello DUA!</h1>
			<button className="btn btn-primary">Test</button>{' '}
		</div>
	);
}