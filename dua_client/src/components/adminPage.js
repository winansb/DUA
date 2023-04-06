import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";
import ParticipantForm from "./hooks/ParticipantForm";
import 'reactjs-popup/dist/index.css'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import StartTrialButton from "./hooks/StartTrialButton";

import Modal from "./hooks/Modal.js";




const axiosHandler = require("../components/hooks/AxiosHandler.js");

export default function AdminPage() {
    const [_users, setUsers] = useState([]);
    
    //each modal will be created new for the specific row
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
		// axios now!
        // axiosHnadler makes this very nice to use
        const promise = axiosHandler.fetchUsers();
            
        promise.then(res => {
            setUsers(res);
        });

        return;
    }, []);

	//TODO minimize (move into StartTestButton component)
    //TODO has a bug where this isnt updating for some reason
    function loadUsers() {

        return _users.map((row) => {

            var detourButton;
            var breakdownButton;
            var startingScenario;
            var deleteUserButton; 

            //We alternate starting test to help the lab know
            //which test to run on each participant as part 
            //of their procedure

            if(row.UID % 2 ==0){
                startingScenario = <p className="my-2">Breakdown</p> 
            }
            else{
                startingScenario = <p className="my-2">Detour</p>
            }

            if (row.BREAKDOWN_COMPLETE) {
                breakdownButton = (
                    //<SendTestButton id={row.USER_ID} test_id="CRASH"  />
                    <StartTrialButton participantName={row.PARTICIPANT_NAME} videoPlaying="BREAKDOWN_START" destination="WALGREENS" nextVideoPlaying="BREAKDOWN_END" test_id="BREAKDOWN" scenarioComplete="Complete" pre1={1} pre2={1} pre3={1} />
                    //<button className="btn btn-primary dua-btn " >Complete</button>				
                    
                );
            } else {
                breakdownButton = (
                    //<SendTestButton id={row.USER_ID} test_id="CRASH" />
                    <StartTrialButton participantName={row.PARTICIPANT_NAME} videoPlaying="BREAKDOWN_START" destination="WALGREENS" nextVideoPlaying="BREAKDOWN_END" test_id="BREAKDOWN" scenarioComplete="Incomplete" pre1={1} pre2={1} pre3={1} />
                    //<button className="btn btn-primary dua-btn " >Incomplete</button>
                );
            }

            if (row.DETOUR_COMPLETE) {
                detourButton = (
                    //<SendTestButton id={row.USER_ID} test_id="DETOUR"  />
                    <StartTrialButton participantName={row.PARTICIPANT_NAME} videoPlaying="DETOUR_START" destination="WALGREENS" nextVideoPlaying={`DETOUR_WALGREENS`} test_id="DETOUR" scenarioComplete="Complete" pre1={1} pre2={1} pre3={1} />
                    //<button className="btn btn-primary dua-btn " >Complete</button>
                );
            } else {
                detourButton = (
                    //<SendTestButton id={row.USER_ID} test_id="DETOUR" />
                    <StartTrialButton participantName={row.PARTICIPANT_NAME} videoPlaying="DETOUR_START" destination="WALGREENS" nextVideoPlaying="DETOUR_WALGREENS" test_id="DETOUR" scenarioComplete="Incomplete" pre1={1} pre2={1} pre3={1} />
                    //<button className="btn btn-primary dua-btn " >Incomplete</button>
                );
            }

            // deleteUserButton = (
            //     <div>
            //         <button onClick={openModal} className= "btn btn-danger delete ">X</button>
            //         <Modal showModal={showModal} closeModal={closeModal} UID={row.UID} name={row.USER_ID} />
            //     </div>
            // );

            return (
                <tr key={row.UID}>
                    <td>{ <p className="my-2">{row.UID}</p>}</td>
                    <td>{ <p className="my-2">{row.PARTICIPANT_NAME}</p>}</td>
                    <td>{startingScenario}</td>
                    <td>{breakdownButton}</td>
                    <td>{detourButton}</td>
                    {/* <td>{deleteUserButton}</td> */}
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
                        <th scope="col">Starting Scenario</th>
                        <th scope="col">Breakdown</th>
                        <th scope="col">Detour</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="data">

                    {loadUsers()}
                </tbody>
            </table>
            
            <a href="/">
                <button className="btn btn-primary dua-btn position-absolute bottom-0 end-0 m-5">Return</button>{" "}
            </a>
            
        </div>
    );
}
