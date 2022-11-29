import React from 'react';

const axiosHandler = require('../hooks/AxiosHandler');

// https://reactjs.org/docs/forms.html#controlled-components
class DataButton extends React.Component {

	constructor(props) {
		super(props);

		this.sendData = this.sendData.bind(this);
	}

	sendData() {
		const dataPromise = axiosHandler.sendTestData(this.props.data, this.props.user_id, this.props.test_id);

		if(!dataPromise) {
			console.error(`TEST DATA:\n\tTEST:${this.props.test_id}\n\tUSER:${this.props.user_id}\n\tDATA:${this.props.data}`);
			return;
		}

		//TODO remove once button is more abstracted
		window.location.href = "/";
	}

	render() {
		return (
			<button className="btn" onClick={this.sendData}>{this.props.text}</button>
		);	
	}
}
export default DataButton;