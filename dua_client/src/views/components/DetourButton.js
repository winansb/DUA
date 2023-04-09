import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
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

function DetourButton(props) {
  const { participant } = props;
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (!participant.DETOUR_COMPLETE) {
      setButtonText('Start Detour');
    } else if (participant.DETOUR_IN_PROGRESS !== 0 && participant.DETOUR_COMPLETE) {
      setButtonText('Continue Detour');
    } else {
      setButtonText('Detour Complete');
    }
  }, [participant]);

  const handleDetourClick = async () => {
    if (buttonText === 'Start Detour' || buttonText === 'Continue Detour') {
      const test = await dispatch(createTest(/*...testData*/));
      const updatedParticipant = {
        ...participant,
        DETOUR_IN_PROGRESS: test.UID
      };
      dispatch(updateParticipant(participant.UID, updatedParticipant));
    }
  };

  return (
    <StyledButton onClick={handleDetourClick}>
      {buttonText}
    </StyledButton>
  );
}

export default connect()(DetourButton);