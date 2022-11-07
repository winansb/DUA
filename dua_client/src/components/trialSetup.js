//This page is what the participants in the study will interact with during 
//a trial


import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"; 

export default function TestSetupPage () {
  return(
      <div className="container-fluid dua-setup">
      <h1 className= "header" >Trial Setup</h1>
      <a href="/waiting">
        <button className="btn btn-primary dua-btn" >Participant Page</button>{' '}
      </a>
      <a href="/adminSetup">
        <button className="btn btn-primary dua-btn" >Admin Page</button>{' '}
      </a>
      <a href="/">
        <button className="btn btn-primary dua-btn" >Return</button>{' '}
      </a>
      </div>
    )
}
