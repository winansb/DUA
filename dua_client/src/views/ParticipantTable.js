import { connect } from 'react-redux';
import { getAllParticipants } from '../redux/actions/participantActions';
import { useEffect, useState } from 'react';  
import { getParticipant, updateDetourComplete, updateBreakdownComplete } from '../redux/actions/participantActions';
import BreakdownButton from './BreakdownButton';
import DetourButton from './DetourButton';


export function ParticipantTable(props) {
    useEffect(() => {
        props.getAllParticipants();
    }, []);
    
    const { participants } = props; 
    const [startingScenario, setStartingScenario] = useState('Breakdown');

    return (
        <table>
          <thead>
            <tr>
              <th>UID</th>
              <th>Participant Name</th>
              <th>Starting Scenario</th>
              <th>Breakdown</th>
              <th>Detour</th>
            </tr>
          </thead>
          <tbody>
          {participants.map((row, index) => {
          const scenario = index % 2 === 0 ? startingScenario : startingScenario === 'Breakdown' ? 'Detour' : 'Breakdown';

          // API call to get participant 
          useEffect(() => {
            props.getParticipant(row.UID);
          }, [row.UID]);

          return (
            <tr key={row.UID}>
              <td>{<p className="my-2">{row.UID}</p>}</td>
              <td>{<p className="my-2">{row.PARTICIPANT_NAME}</p>}</td>
              <td>{scenario}</td>
              <td><BreakdownButton participant={props.participant} /></td>
              <td><DetourButton participant={props.participant} /></td>
            </tr>
          );
        })}
          </tbody>
        </table>
      );
}

const mapStateToProps = (state) => ({
    participants: state.participantReducer.participants,
});

export default connect(mapStateToProps, { getAllParticipants })(participantTable); 