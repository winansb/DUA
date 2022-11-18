import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function WaitingPage () {

  const [_data, setData] = useState([]);

	useEffect(() => {
		async function waitForTest() {
			const response = await fetch(`http://localhost:8000/pollTest`);

			if(!response.ok) {
				window.alert(`ERROR: ${response.statusText}`);
				return;
			}

			const _data = await response.json();
			// console.log(_data.rows.length);
			setData(_data.rows);
		}

		setInterval(waitForTest(), 5000);
    
		return;
	}, [_data.length]);

  if(_data.rows[0].TEST_ID_ACTIVE != null) {
    return (
      <div className="container-fluid">
        <h1 className= "waiting" >A test has begun!</h1>
        <a href="/">
          <button className="btn btn-primary dua-btn" >Return</button>{' '}
        </a>
      </div>
    );
  }else{  
    return(
      <div className="container-fluid">
        <h1 className= "waiting" >Please wait while we get your test ready</h1>
        <a href="/">
          <button className="btn btn-primary dua-btn" >Return</button>{' '}
        </a>
      </div>
    );
  }
}