import React from 'react';

// https://reactjs.org/docs/forms.html#controlled-components

const axiosHandler = require("../hooks/AxiosHandler.js");

class StartTestButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tests: []};

		this.startTest = this.startTest.bind(this);
	}

	startTest() {
		// cleanup server-end active test IDs
		// moved to handler
		const promise = axiosHandler.cleanupTests(this.props.id);

		promise.then(res => {
			if(res){
				window.open('./TestVideoDisplay', '_blank');
				window.open('./agent', '_blank');
			}
		})
		.catch(err => {
			console.err(`startTest(): Promise not fulfilled\n ${err}`);
		});
	}

	render() {
		return (
			<button className='btn btn-primary' onClick={this.startTest}>{this.props.id}: {this.props.test_id}</button>
		);
	}
}
export default StartTestButton;