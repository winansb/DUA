import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { updateParticipant } from '../../redux/actions/participantActions';
import { createTest } from '../../redux/actions/testActions';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


const StyledButton = styled.button`
  background-color: #CBC3E3;
  color: #000;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #C0C0E0;
    color: #fff;
  }

  &:active {
    background-color: #5d3a7a;
  }
`;

function BreakdownButton(props) {
  const { participant } = props;
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (!participant.BREAKDOWN_COMPLETE) {
      setButtonText('Start Breakdown');
    } else if (participant.BREAKDOWN_IN_PROGRESS !== 0 && participant.BREAKDOWN_COMPLETE) {
      setButtonText('Continue Breakdown');
    } else {
      setButtonText('Breakdown Completed');
    }
  }, [participant]);

  const handleBreakdownClick = async () => {
    if (buttonText === 'Start Breakdown' || buttonText === 'Continue Breakdown') {
      const test_data = {
        MCI: 'MCI_value', // Replace with actual value
        ORDER: 1, // Replace with actual value
        USE_PLAYBOOK: 'yes', // Replace with actual value
      };

      const test = await dispatch(createTest(test_data)); 
      const test_uid = test.UID;

      const updatedParticipant = {
        ...participant,
        BREAKDOWN_IN_PROGRESS: test_uid,
      };

      dispatch(updateParticipant(participant.UID, updatedParticipant));
    }
  };

  return (
    <StyledButton onClick={handleBreakdownClick}>
      {buttonText}
    </StyledButton>
  );
}

const mapStateToProps = (state) => ({
  participants: state.participant ? state.participant.participants : [],
  isParticipantLoading: state.participant ? state.participant.isParticipantLoading : false,
});

export default connect(mapStateToProps)(BreakdownButton);