import React from "react";

class Postform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			age: ""
		};
	}
	handleFirstNameChange = event => {
		const firstName = event.target.value;
		this.setState({ firstName: firstName });
	};
	handleAgeChange = event => {
		const age = event.target.value;
		this.setState({ age: age });
	};
	handleSubmit = event => {
		event.preventDefault();
		const { firstName, age } = this.state;
		console.log(`A first name was submitted: ${firstName}. An age was submitted: ${age}`);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				First Name:
				<input name="firstName" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
				Age:
				<input name="age" type="number" value={this.state.age} onChange={this.handleAgeChange} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Postform;
