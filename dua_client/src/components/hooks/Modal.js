import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../css/styles.css";

const Modal = ({ showModal, closeModal, UID, name }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: 20,
        borderRadius: 10
      }}>
        <h2>User Deletion Warning</h2>
        <p>By clicking submit you will delete this entry</p>
        <p>For the moment this feature is broken as it only shows the information for the final table entry</p>

        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Participant ID</th>
                    </tr>
                </thead>
                <tbody id="data">
                <tr key={UID}>
                    <td>{ <p className="my-2">{UID}</p>}</td>
                    <td>{ <p className="my-2">{name}</p>}</td>
                </tr>
                </tbody>
        </table>
        <button onClick={closeModal}>Close</button>
        <button onClick >Submit</button>
      </div>
    </div>
  );
};

export default Modal;