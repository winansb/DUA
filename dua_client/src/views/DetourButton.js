import { connect } from 'react-redux';
import { updateDetour } from '../redux/actions/participantActions';

function DetourButton(props) {
  const { participant, updateDetour } = props;

  let buttonText = '';
  let buttonClassName = '';

  if (!participant.DETOUR_COMPLETE) {
    buttonText = 'Incomplete';
  } else if (participant.DETOUR_IN_PROGRESS !== 0 && participant.DETOUR_COMPLETE ) {
    buttonText = 'In-progress';
  } else {
    buttonText = 'Complete';
  }

  const handleDetourClick = () => {
    if (buttonText === 'Incomplete') {
      updateDetour(participant.UID);
    }
  };

  return (
    <button onClick={handleDetourClick} className={buttonClassName}>
      {buttonText}
    </button>
  );
}

const mapDispatchToProps = {
  updateDetour,
};

export default connect(null, mapDispatchToProps)(DetourButton);