import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 
import ParticipantForm from "./ParticipantForm";

export default function AdminPage () {

  const [_users, setUsers] = useState([]);

	useEffect(() => {
		async function getUsers() {
			const res = await fetch(`http://localhost:8000/user/`);

			if(!res.ok) {
				window.alert(`ERROR: ${res.statusText}`);
				return;
			}

			const _users = await res.json();
			// console.log(_data.rows.length);
			setUsers(_users.rows);
		}

		getUsers();

		return;
	}, [_users.length]);

  function loadUsers() {
    return (_users.map(row => {

      var detourComplete = false;
      var crashComplete = false;

      if(row.TEST_ID_COMPLETE != null) {
        if(row.TEST_ID_COMPLETE.includes("CRASH"))
          crashComplete = true;
        if(row.TEST_ID_COMPLETE.includes("DETOUR"))
          detourComplete = true;
      }

      var detourButton;
      var crashButton;

      if(crashComplete) {
        crashButton = <button className='btn btn-primary' disabled>Complete</button>;
      }else{
        crashButton = <button className='btn btn-primary'>Incomplete</button>;
      }

      if(detourComplete) {
        detourButton = <button className='btn btn-primary' disabled>Complete</button>;
      }else{
        detourButton = <button className='btn btn-primary'>Incomplete</button>;
      }

			return (
			  <tr key={row.UID}>
				  <td>{row.UID}</td>
				  <td>{row.USER_ID}</td>
          <td>
            {crashButton}
          </td>
          <td>
            {detourButton}
          </td>
			  </tr>)
      })
    );
  }

  return(
      <div className="container-fluid">
        <h1 className= "waiting" >Enter Relevant Data</h1>
        {/* <form className="quick-align">
          <label> Participant ID:
            <input type="text" name ="I.D" />
            <button className="btn btn-primary" >Add ID</button>
          </label>
        </form> */}

        <ParticipantForm />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Participant ID</th>
              <th scope="col">Test 1: Crash</th>
              <th scope="col">Test 2: Detour</th>
            </tr>
          </thead>
          <tbody id="data">
            {/* <tr>
                <th scope="row">1</th>
                <td>JohnD</td>
                <td><button className="btn btn-primary" >Incomplete</button></td>
                <td>Complete</td>
              </tr> */}

            {loadUsers()}
          </tbody>
        </table>
        <a href="/testingSetup">
          <button className="btn btn-primary dua-btn" >Return</button>{' '}
        </a>
      </div>
    );
}
