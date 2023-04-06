import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateBreakdownComplete } from '../../redux/actions/participantActions'; // import the updateBreakdownComplete action

function BreakdownButton(props) {
  const { participant } = props;
  const dispatch = useDispatch(); // get the dispatch function

  let buttonText = '';
  let buttonClassName = '';

  if (!participant.BREAKDOWN_COMPLETE) {
    buttonText = 'Incomplete';
  } else if (participant.BREAKDOWN_IN_PROGRESS !== 0 && participant.BREAKDOWN_COMPLETE) { // if breakdown complete true and in progress flag is set 
    buttonText = 'In-progress';
  } else {
    buttonText = 'Complete';
  }

  const handleBreakdownClick = () => {
    if (buttonText === 'Incomplete') {
      dispatch(updateBreakdownComplete(participant.UID)); // call the updateBreakdownComplete action with the participant UID
    }
  };

  return (
    <button onClick={handleBreakdownClick} className={buttonClassName}>
      {buttonText}
    </button>
  );
}

export default connect(null)(BreakdownButton); // remove the mapDispatchToProps function since we're not using it anymore