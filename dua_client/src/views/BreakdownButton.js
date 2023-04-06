import { connect } from 'react-redux';
import { updateBreakdown } from '../redux/actions/participantActions';

function BreakdownButton(props) {
  const { participant, updateBreakdown } = props;

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
      updateBreakdown(participant.UID);
    }
  };

  return (
    <button onClick={handleBreakdownClick} className={buttonClassName}>
      {buttonText}
    </button>
  );
}

const mapDispatchToProps = {
  updateBreakdown,
};

export default connect(null, mapDispatchToProps)(BreakdownButton);