import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function AdminPage () {
	return(
	<div className="container-fluid text-center">

		<h1 className= "waiting" >Enter Relevant Data</h1>

		<form>
			<label >
			Participant ID:
			<input type="text" name ="I.D" />
			<button className="btn btn-primary project-btn__small" >Add</button>
			</label>
		</form>

		<table className="table">

			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Participant ID</th>
					<th scope="col">Test 1: Crash</th>
					<th scope="col">Test 2: Detour</th>
				</tr>
			</thead>

			<tbody>
			<tr>
				<th scope="row">1</th>

				<td>JohnD</td>

				<td>
					<div class="custom-control custom-radio p-1">
						<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input m-1" />
						Incomplete
					</div>
				</td>

				<td>
					<div class="custom-control custom-radio p-1">
						<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input m-1" />
						Complete
					</div>
				</td>
			</tr>

			<tr>
				<th scope="row">2</th>
					<td>JaneD</td>
					<td>Complete</td>
					<td>Complete</td>
				</tr>

			<tr>
				<th scope="row">3</th>
					<td>1234</td>
					<td>Complete</td>
					<td>Complete</td>
			</tr>
			</tbody>
		</table>

		<button className="btn btn-primary project-btn m-2" >Start Trial</button>{' '}

		<a href="/testingSetup">
			<button className="btn btn-primary project-btn position-absolute bottom-0 end-0 m-5" >Return</button>{' '}
		</a>

	</div>

	)
}
