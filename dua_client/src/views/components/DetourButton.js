import { connect } from 'react-redux';
import { updateDetourComplete } from '../../redux/actions/participantActions';

function DetourButton(props) {
  const { participant, updateDetourComplete } = props;

  let buttonText = '';
  let buttonClassName = '';

  if (!participant.DETOUR_COMPLETE) {
    buttonText = 'Incomplete';
  } else if (participant.DETOUR_IN_PROGRESS !== 0 && participant.DETOUR_COMPLETE) {
    buttonText = 'In-progress';
  } else {
    buttonText = 'Complete';
  }

  const handleDetourClick = () => {
    if (buttonText === 'Incomplete') {
      updateDetourComplete(participant.UID);
    }
  };

  return (
    <button onClick={handleDetourClick} className={buttonClassName}>
      {buttonText}
    </button>
  );
}

const mapDispatchToProps = {
  updateDetourComplete,
};

export default connect(null, mapDispatchToProps)(DetourButton);