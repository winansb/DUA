import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAllParticipants } from "../../../redux/actions/participantActions";
import { useEffect } from "react";
import styled from "styled-components";
import TrialButton from "./TrialButton";

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
  const [test, setTest] = useState(null);
  const participants = useSelector((state) => state.participant.participants);
  const isParticipantLoading = useSelector(
    (state) => state.participant.isParticipantLoading
  );

  useEffect(() => {
    dispatch(getAllParticipants());
  }, [dispatch]);

  if (isParticipantLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>UID</th>
            <th>Participant ID</th>
            <th>Starting Scenario</th>
            <th>Detour</th>
            <th>Breakdown</th>
          </tr>
        </thead>
        <tbody>
          {participants &&
            participants.map((row) => (
              <tr key={row.UID}>
                <td>{row.UID}</td>
                <td>{row.PARTICIPANT_ID}</td>
                <td>{test && test.ORDER}</td>
                <td>
                  <TrialButton participant={row} column={0} setTest={setTest} />
                </td>
                <td>
                  <TrialButton participant={row} column={1} setTest={setTest} />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </>
  );
}

const mapStateToProps = (state) => ({
  participants: state.participant ? state.participant.participants : [],
  isParticipantLoading: state.participant
    ? state.participant.isParticipantLoading
    : false,
});

export default connect(mapStateToProps, { getAllParticipants })(
  ParticipantTable
);
