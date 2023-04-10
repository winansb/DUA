import React from 'react';
import { useLocation } from 'react-router-dom';

const TrialRun = () => {
  const location = useLocation();
  const { test, participant, column } = location.state;
  return (
    <div>
      <h1>Work in Progress</h1>
      <p>This page is under construction. Check back later for updates.</p>
      <p>Test: {JSON.stringify(test, null, 2)}</p>
      <p>Participant: {JSON.stringify(participant, null, 2)}</p>
      <p>Column: {column}</p>
    </div>
  );
};

export default TrialRun;