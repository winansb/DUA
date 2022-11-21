import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 


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
export default function WaitingPage () {

  const [_data, setData] = useState([]);
  let fetching = true;

	useEffect(() => {
		async function getTests() {
      const fetchEnd = false;
			const res = await fetch(`http://localhost:8000/test`);

			if(!res.ok) {
				window.alert(`ERROR: ${res.statusText}`);
				return;
			}

			const _data = await res.json();
      // console.log(_data);
			// console.log(_data.rows.length);
			setData(_data.rows);
      /* if(_data === []) {
        console.log("BLANK");
      } */
		}

    getTests();
		return;
	}, [_data.length]);

  console.log(fetching);

  function beginTest(user_id) {
    window.alert(user_id);
    return;
  }

  function loadData() {
		return (_data.map(row => {
      return (<button key={row.USER_ID} className="btn btn-success" /* onClick={beginTest(row.USER_ID)} */>{row.USER_ID}, {row.TEST_ID_ACTIVE}</button>)
    }));
	}

  if(!fetching) {
  if(_data.length > 1) {
    return(
      <div className="container-fluid text-center p-2">
        <h1 className= "waiting" >Select a test you would like to begin</h1>
        <div className="container p-2">
          {loadData()}
        </div>
        <a href="/">
          <button className="btn btn-primary project-btn" >Return</button>{' '}
        </a>
      </div>
    );
  }else if(_data.length == 1) {
    return (<div className="container-fluid text-center p-2">
      <h1 className="waiting">Starting Test! This window can be closed</h1>
    </div>);
  }else if(_data.length < 1) {
    return(
      <div className="container-fluid text-center p-2">
        <h1 className= "waiting" >There are no tests currently available!</h1>
        <div className="container p-2">
          {loadData()}
        </div>
        <a href="/">
          <button className="btn btn-primary project-btn" >Return</button>{' '}
        </a>
      </div>
    );
  }
}
}