import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getAllParticipants } from '../../redux/actions/participantActions';
import { useEffect } from 'react';
import styled from 'styled-components';
import DetourButton from './DetourButton';
import BreakdownButton from './BreakdownButton';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export function ParticipantTable() {

  const dispatch = useDispatch();
  const participants = useSelector(state => state.participant.participants);
  const isParticipantLoading = useSelector(state => state.participant.isParticipantLoading); 

  useEffect(() => {
    dispatch(getAllParticipants());
  },[dispatch]);


  if (isParticipantLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>UID</th>
            <th>Participant Name</th>
            <th>Starting Scenario</th>
            <th>Detour</th>
            <th>Breakdown</th>
          </tr>
        </thead>
        <tbody>
          {participants && participants.map((row) => (
            <tr key={row.UID}>
              <td>{row.UID}</td>
              <td>{row.PARTICIPANT_NAME}</td>
              <td>{row.UID % 2 === 0 ? 'Detour' : 'Breakdown'}</td>
              <td><DetourButton participant={row} /></td>
              <td><BreakdownButton participant={row} /></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

const mapStateToProps = (state) => ({
  participants: state.participant ? state.participant.participants : [],
  isParticipantLoading: state.participant ? state.participant.isParticipantLoading : false,
});

export default connect(mapStateToProps, { getAllParticipants })(ParticipantTable);