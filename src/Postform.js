import React, { Component } from "react";

export default class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}
	change = e => this.setState({ [e.target.name]: e.target.value });
	submit = e => {
		e.preventDefault();
		this.props.toProps(this.state);
	};
	render() {
		return (
			<div>
				<form>
					<input
						placeholder="username"
						name="username"
						value={this.state.username}
						onChange={e => this.change(e)}
					/>
					<input
						placeholder="password"
						name="password"
						value={this.state.password}
						onChange={e => this.change(e)}
					/>
					<button onClick={e => this.submit(e)}>Sub</button>
				</form>
			</div>
		);
	}
}
