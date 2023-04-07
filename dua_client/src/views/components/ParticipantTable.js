import { connect } from 'react-redux';
import { getAllParticipants } from '../../redux/actions/participantActions';
import { useEffect } from 'react';

export function ParticipantTable({ participants, isParticipantLoading, getAllParticipants }) {

  useEffect(() => {
    getAllParticipants();
  }, [getAllParticipants]);

  if (isParticipantLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>UID</th>
          <th>Participant Name</th>
          <th>Detour Complete</th>
          <th>Breakdown Complete</th>
          <th>Detour In Progress</th>
          <th>Breakdown In Progress</th>
        </tr>
      </thead>
      <tbody>
        {participants && participants.map((row) => (
          <tr key={row.UID}>
            <td>{row.UID}</td>
            <td>{row.PARTICIPANT_NAME}</td>
            <td>{row.DETOUR_COMPLETE.toString()}</td>
            <td>{row.BREAKDOWN_COMPLETE.toString()}</td>
            <td>{row.DETOUR_IN_PROGRESS.toString()}</td>
            <td>{row.BREAKDOWN_IN_PROGRESS.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  participants: state.participant ? state.participant.participants : [],
  isParticipantLoading: state.participant ? state.participant.isParticipantLoading : false,
});

export default connect(mapStateToProps, { getAllParticipants })(ParticipantTable);