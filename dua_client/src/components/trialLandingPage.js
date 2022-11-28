import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 
import axios from "axios";

import StartTestButton from './hooks/StartTestButton';

//TODO
/** ERROR - Server requests are happening multiple times,
 *    Likely because the page is being rendered multiple times
 *      once when page is clicked from parent page, no server data loaded
 *      then again when server data is loaded, firing render() twice
 * 
 *    Convert to a React.Component? Can use conditional rendering to 
 *      wait for server output before rendering:
 *    https://reactjs.org/docs/conditional-rendering.html
 */ 

export default function WaitingPage() {

	const [_tests, setTests] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8000/test`).then(res => {
			const tests = res.data.rows;
			setTests(tests);

			if(tests.length == 1) {
				window.open('./videoDisplay', '_blank')
				window.open('./agent', '_blank')
			}
			console.log(tests);
		})
		.catch(err => {
			console.log(err);
		});

		return;
	}, []);

	function getMultiTestRender() {
		return (_tests.map(row => {
			// console.log(row);
			return ( 
				<div className="col" key={row.UID}>
					<StartTestButton id={row.USER_ID} test_id={row.TEST_ID_ACTIVE} />
				</div>
			);
		}));
	}

	/* fetchPosts() {
		const res = await fetch(`http://localhost:8000/test`);

		if(!res.ok) {
			window.alert(`ERROR: ${res.statusText}`);
			return;
		}

		let data = await res.json();
		return data;
	} */

	if(!_tests || _tests.length == 0) {
		return (
			<div className="container-fluid text-center p-2">
				<h1 className="waiting">Please wait for trial to start!</h1>
			</div>
		);
	}else if(_tests.length == 1){
		return (
			<div className="container-fluid text-center p-2">
				<h1 className="waiting">Starting Test! This window can be closed</h1>
			</div>
		);
	}else{
		return(
			<div className="container-fluid text-center p-2">
				<h1 className="waiting">Please select a test to start!</h1>
				<div className="row justify-content-center">
					{getMultiTestRender()}
				</div>
			</div>
		)
	}
}