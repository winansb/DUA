import React from 'react';

// https://reactjs.org/docs/forms.html#controlled-components

class StartTestButton extends React.Component {

	constructor(props) {
		super(props);
		/* this.state = {value: ''}; */

		this.startTest = this.startTest.bind(this);
	}

	async startTest() {
		// event.preventDefault();
		// alert('Submitted ID: ' + this.state.value);

		// window.alert(this.props.id);

		const d = {
			USER_ID: this.props.id,
			TEST_ID: this.props.test_id
		};
		
		const res = await fetch("http://localhost:8000/test/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(d)
		})
		.catch(err => {
			window.alert(err);
			return;
		});


		if(res.ok) {
			window.alert("Test with\nTEST_ID: " + this.props.test_id + "\nUSER_ID: " + this.props.id + "\nis now started");
		}else{
			window.alert(res.err);
		}
		/* const d = {
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

		window.location.reload(); */
		/* setForm({ user_id: ""}) */
	}

	render() {

		if(this.props.disabled) {
			return (
				<button className='btn btn-primary' disabled>Complete</button>
			);
		}else{
			return (
				<button className='btn btn-primary' onClick={this.startTest}>Incomplete</button>
			);
		}
		
	}
}
export default StartTestButton;