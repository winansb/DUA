import React, { useEffect, useState } from "react";

/**
 * For testing the functionality of node-csv and manipulating data from site to file
 * 	Most likely will be a library which can be imported into other files that will require
 * 	this functionality.
 * 	Does not currently hook into any database (we don't have one) but can if needed
 */

// Bootstrap/CSS
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

// File manip
/* const fs = require("fs");
const parse =
const { stringify } = require("csv-stringify"); */
/* const file = "../data/testing.csv"; */
// const writeableStream = fs.createWriteStream(file);
/* const cols = [
	"Title",
	"Button_Clicks",
]; */

var clickCount = 0;

 function count() {
	clickCount++;
	document.getElementById("clickCounter").textContent = "Click Count: " + clickCount;
	// console.log("clicked");
}

/* function writeToFile() {
	const stringifier = stringify({header: true, columns: cols });
	stringifier.write(clickCount);
	stringifier.pipe(writeableStream);
} */

export default function StorageTestPage() {
	const [_data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await fetch(`http://localhost:8000/getData`);

			if(!response.ok) {
				window.alert(`ERROR: ${response.statusText}`);
				return;
			}

			const _data = await response.json();
			// console.log(_data.rows.length);
			setData(_data.rows);
		}

		getData();

		return;
	}, [_data.length]);

	function loadData() {
		return (_data.map(row => {
			return (
			<tr key={row.id}>
				<td>{row.id}</td>
				<td>{row.button_clicks}</td>
			</tr>)}));
	}

	async function insertData() {
		const d = {
			id: _data.length + 1,
			button_clicks: clickCount,
		};

		await fetch("http://localhost:8000/insert/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(d),
		})
		.catch(err => {
			window.alert(err);
			return;
		});

		window.location = "./storage";
	}

	

  	return(
     	<div className="container-fluid">
			<div className="row">
				<label id="clickCounter">Click Count: {clickCount}</label>
        		<button onClick={count} className="btn btn-primary dua-btn" >Click Me!</button>{' '}
				<button onClick={insertData} className="btn btn-primary dua-btn" >Insert Data</button>{' '}

				<h3>Data List</h3>
				<table id="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Clicks</th>
						</tr>
					</thead>
					<tbody id="data">
						{loadData()}
					</tbody>
				</table>
			</div>
      	</div>
    )
}
