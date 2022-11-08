import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function ExportPage () {
	return(
		<div className="container-fluid text-center">

			<h1 className= "waiting" >Select Trial To Export</h1>

			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<button type="button" class="btn btn-outline-secondary">Action</button>
					<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span class="sr-only"></span>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
						<div role="separator" class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Separated link</a>
					</div>
				</div>
				<input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
			</div>

			<table class="table table-responsive table-inverse">
				<thead>
					<tr>
						<th>Test ID</th>
						<th>Trial 1</th>
						<th>Trial 2</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Auto Populated ID from db</td>
						<td><input type="checkbox" id="check1" name="customCheck" class="custom-control-input m-1" />trial1.data from db</td>
						<td><input type="checkbox" id="check2" name="customCheck" class="custom-control-input m-1" />trial2.data from db</td>
					</tr>
				</tbody>
			</table>

			<button className="btn btn-primary project-btn m-2" >Export</button>{' '}

			<a href="/">
				<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
			</a>

		</div>
	)
}



