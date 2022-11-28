import axios from 'axios';
import React from 'react';

// https://reactjs.org/docs/forms.html#controlled-components
class SendTestButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tests: []};

		this.sendTest = this.sendTest.bind(this);
	}

	sendTest() {
		
		axios.post(`http://localhost:8000/test/`, {
			USER_ID: this.props.id,
			TEST_ID: this.props.test_id
		})
		.catch(err => {
			console.log(err);
		});

		window.location.reload();
	}

	render() {

		if(this.props.disabled) {
			return (
				<button className='btn btn-primary' disabled>Complete</button>
			);
		}else{
			return (
				<button className='btn btn-primary' onClick={this.sendTest}>Incomplete</button>
			);
		}
		
	}
}
export default SendTestButton;