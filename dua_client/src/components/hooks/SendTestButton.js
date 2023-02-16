import React from 'react';

const axiosHandler = require('../hooks/AxiosHandler');

// https://reactjs.org/docs/forms.html#controlled-components
class SendTestButton extends React.Component {

	constructor(props) {
		super(props);

		this.sendTest = this.sendTest.bind(this);
	}

	sendTest() {
		const promise = axiosHandler.activateTest(this.props.id, this.props.test_id);

		if(!promise) {
			console.err(`There was an issue activating test ${this.props.test_id} for user ${this.props.id}`);
			return;
		}

		promise.then(res => {
			if(res) {
				window.location.reload();
			}
		})
		.catch(err => {
			console.err(`activateTest(): Promise not fulfilled\n ${err}`);
		});
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