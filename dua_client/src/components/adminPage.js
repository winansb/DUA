import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
import ParticipantForm from "./hooks/ParticipantForm";
import SendTestButton from "./hooks/SendTestButton";

export default function AdminPage() {
    const [_users, setUsers] = useState([]);

    useEffect(() => {
		// axios now!
		/**
		 * Should consider making utility functions and separating, all call requests are the 
		 * same given an address, can pass in additional variables if needed
		 */
		axios.get(`http://localhost:8000/user/`).then(res => {
			// console.log(res.data.rows);
			const users = res.data.rows;
			setUsers(users);
		})
		.catch(err => {
			console.log(err);
		});

        return;
    }, []);

	//TODO minimize (move into StartTestButton component)
    function loadUsers() {
        return _users.map((row) => {
            var detourComplete = false;
            var crashComplete = false;

            if (row.TEST_ID_COMPLETE != null) {
                if (row.TEST_ID_COMPLETE.includes("CRASH"))
                    crashComplete = true;
                if (row.TEST_ID_COMPLETE.includes("DETOUR"))
                    detourComplete = true;
            }

            var detourButton;
            var crashButton;

            if (crashComplete) {
                crashButton = (
                    <SendTestButton id={row.USER_ID} test_id="CRASH" disabled />
                );
            } else {
                crashButton = (
                    <SendTestButton id={row.USER_ID} test_id="CRASH" />
                );
            }

            if (detourComplete) {
                detourButton = (
                    <SendTestButton id={row.USER_ID} test_id="DETOUR" disabled />
                );
            } else {
                detourButton = (
                    <SendTestButton id={row.USER_ID} test_id="DETOUR" />
                );
            }

            return (
                <tr key={row.UID}>
                    <td>{row.UID}</td>
                    <td>{row.USER_ID}</td>
                    <td>{crashButton}</td>
                    <td>{detourButton}</td>
                </tr>
            );
        });
    }

    return (
        <div className="container-fluid">
            <h1 className="waiting">Enter Relevant Data</h1>
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
                <button className="btn btn-primary dua-btn">Return</button>{" "}
            </a>
        </div>
    );
}
