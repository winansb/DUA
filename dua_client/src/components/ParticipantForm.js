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
		// alert('Submitted ID: ' + this.state.value);
		const d = {
			user_id: this.state.value
		};

		await fetch("http://localhost:8000/user/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(d),
		})
		.catch(err => {
			window.alert(err);
			return;
		});

		window.location.reload();
		/* setForm({ user_id: ""}) */
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