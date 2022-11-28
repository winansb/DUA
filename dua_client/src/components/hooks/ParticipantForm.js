import axios from 'axios';
import React from 'react';

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

	async handleSubmit(event) {
		event.preventDefault();

		// When posting, axios doesn't need same structure as HTTP
		// 		Attributes would be the same as names of each in SQL server
		// 		Values can be assigned directly (no json conversions!)
		axios.post("http://localhost:8000/user/", {
			user_id: this.state.value
		})
		.catch(err => {
			console.log(err);
		});

		window.location.reload();
	}

	render() {
		return (
			<form className="submission-form" onSubmit={this.handleSubmit}>
          		<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Participant ID"/>
          		<input type="submit" value="Submit" />
        	</form>
		);
	}
}
export default ParticipantForm;