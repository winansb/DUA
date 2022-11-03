import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function WaitingPage () {
  return(
      <div className="container-fluid">
      <h1 className= "waiting" >Please wait while we get your test ready</h1>
      <a href="/testingSetup">
        <button className="btn btn-primary dua-btn" >Return</button>{' '}
      </a>
      </div>
    )
}