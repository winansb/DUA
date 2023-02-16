import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// https://reactjs.org/docs/forms.html#controlled-components

const axiosHandler = require("../hooks/AxiosHandler.js");



class StartTrialButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tests: []};

		this.startTest = this.startTest.bind(this);
	}

	startTest() {
		// cleanup server-end active test IDs
		// moved to handler
		const promise = axiosHandler.startTest(this.props.participantName, this.props.videoPlaying, this.props.nextVideoPlaying, this.props.destination, this.props.pre1, this.props.pre2, this.props.pre3 );

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
			<button className='btn btn-primary' onClick={this.startTest}>{this.props.scenarioComplete}</button>
		);
	}
}
export default StartTrialButton;