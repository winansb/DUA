import React from "react";

// bootstrap css import
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

export default function MainPage() {
	return (
		<div className="container-fluid">
			<h1>Hello DUA!</h1>
			<h1 className="test2">Hello DUA!2</h1>
			<button className="btn btn-primary">Test</button>{' '}
		</div>
	);
}