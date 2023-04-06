import { connect } from 'react-redux';
import { getAllParticipants } from '../../redux/actions/participantActions';
import { useEffect, useState } from 'react';  
import { getParticipant, updateDetourComplete, updateBreakdownComplete } from '../../redux/actions/participantActions';
import BreakdownButton from './BreakdownButton';
import DetourButton from './DetourButton';

export function ParticipantTable(props) {
  const { participants, participant } = props;
  const [startingScenario, setStartingScenario] = useState('Breakdown');

  useEffect(() => {
    props.getAllParticipants();
  }, []);

  useEffect(() => {
    participants.forEach((row) => {
      props.getParticipant(row.UID);
    });
  }, [participants]);

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
          const scenario =
            index % 2 === 0
              ? startingScenario
              : startingScenario === 'Breakdown'
              ? 'Detour'
              : 'Breakdown';

          return (
            <tr key={row.UID}>
              <td>{<p className="my-2">{row.UID}</p>}</td>
              <td>{<p className="my-2">{row.PARTICIPANT_NAME}</p>}</td>
              <td>{scenario}</td>
              <td>
                <BreakdownButton
                  participant={participant[row.UID]}
                  updateBreakdown={props.updateBreakdownComplete}
                />
              </td>
              <td>
                <DetourButton
                  participant={participant[row.UID]}
                  updateDetour={props.updateDetourComplete}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  participants: state.participantReducer.participants,
  participant: state.participantReducer.participant,
});

export default connect(mapStateToProps, { getAllParticipants, getParticipant, updateDetourComplete, updateBreakdownComplete })(ParticipantTable);