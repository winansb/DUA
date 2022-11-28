import axios from 'axios';
import React from 'react';

// https://reactjs.org/docs/forms.html#controlled-components
class StartTestButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tests: []};

		this.startTest = this.startTest.bind(this);
	}

	startTest() {

		// cleanup server-end active test IDs
		axios.patch(`http://localhost:8000/test/`, {
			USER_ID: this.props.id
		})
		.catch(err => {
			console.log(err);
		})
		.then(res => {
			console.log(res);
			console.log("INFO: CLEANUP - Secondary USER_IDs with TEST_ID_ACTIVE != NULL removed");
		});
		
		window.open('./videoDisplay', '_blank');
		window.open('./agent', '_blank');
		/* axios.post(`http://localhost:8000/test/`, {
			USER_ID: this.props.id,
			TEST_ID: this.props.test_id
		})
		.catch(err => {
			console.log(err);
		}); */

		// window.location.reload();
	}

	render() {
		return (
			<button className='btn btn-primary' onClick={this.startTest}>{this.props.id}: {this.props.test_id}</button>
		);
	}
}
export default StartTestButton;