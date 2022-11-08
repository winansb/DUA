import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function UploadPage () {
	return(
		<div className="container-fluid text-center">

			<h1 className= "waiting" >Select Files to Upload</h1>

			<div className = "container p-3">
				<label class="file">
					<input type="file" id="file" />
					<span class="file-custom"></span>
				</label>
			</div>

			<a href="/">
				<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
			</a>

		</div>
	)
}