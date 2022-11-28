import React from 'react';

const axiosHandler = require('../hooks/AxiosHandler');

// https://reactjs.org/docs/forms.html#controlled-components

class ParticipantForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		// When posting, axios doesn't need same structure as HTTP
		// 		Attributes would be the same as names of each in SQL server
		// 		Values can be assigned directly (no json conversions!)
		const promise = axiosHandler.createUser(this.state.value);

		// console.log(promise);

		if(!promise) {
			document.getElementById("errMsg").textContent = "Please enter a valid Participant ID";
			return;
		}

		promise.then(res => {
			if(res) {
				window.location.reload();
			}
		})
		.catch(err => {
			console.err(`createUser(): Promise not fulfilled\n ${err}`);
		});
	}

	render() {
		return (
			<form className="submission-form" onSubmit={this.handleSubmit}>
				<label style={{color: '#ff0000'}} id="errMsg"></label><br />
          		<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Participant ID"/>
          		<input type="submit" value="Submit" />
        	</form>
		);
	}
}
export default ParticipantForm;