import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function AdminPage () {
  return(
      <div className="container-fluid">
      <h1 className= "waiting" >Enter Relevant Data</h1>
      <form className="quick-align">
        <label >
          Participant ID:
          <input type="text" name ="I.D" />
          <button className="btn btn-primary" >Add ID</button>
        </label>
      </form>
      <table class="table">
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
            <td><button className="btn btn-primary" >Incomplete</button></td>
            <td>Complete</td>
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
      <a href="/testingSetup">
        <button className="btn btn-primary dua-btn" >Return</button>{' '}
      </a>
      </div>
    )
}
