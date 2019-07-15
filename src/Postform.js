import React, { Component } from "react";

export default class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}
	change = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	submitForm = e => {
		e.preventDefault();
		this.setState({
			username: "",
			password: ""
		});
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<form>
					<input
						name="username"
						placeholder="username"
						value={this.state.username}
						onChange={e => this.change(e)}
					/>
					<input
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={e => this.change(e)}
					/>
					<button onClick={e => this.submitForm(e)}>Submit</button>
				</form>
			</div>
		);
	}
}
