import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAllParticipants } from "../../../redux/actions/participantActions";
import { useEffect } from "react";
import styled from "styled-components";
import TrialButton from "./TrialButton";
import trialDataArray from "../../../data/TrialData";

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
            {trialDataArray.map((trial, index) => (
            <th key={index}>{trial.trialType}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {participants &&
            participants.map((row) => (
              <tr key={row.UID}>
                <td>{row.UID}</td>
                <td>{row.PARTICIPANT_ID}</td>
                <td>{test && test.ORDER}</td>
                {trialDataArray.map((trial, index) => (
                  <td key={index}>
                    <TrialButton
                      participant={row}
                      trialType={trial.trialType}
                      setTest={setTest}
                    />
                  </td>
                ))}
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
