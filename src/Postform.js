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
		this.props.onChange({[e.target.name]: e.target.value})
		this.setState({ [e.target.name]: e.target.value });
	};
	submit = e => {
		e.preventDefault();
		this.setState({
			username: "",
			password: ""
		});
	};
	render() {
		return (
			<div>
				<form>
					<input
						placeholder="username"
						value={this.state.username}
						name="username"
						onChange={e => this.change(e)}
					/>
					<input
						placeholder="password"
						value={this.state.password}
						name="password"
						onChange={e => this.change(e)}
					/>
					<button onClick={e => this.submit(e)}>Sub</button>
				</form>
			</div>
		);
	}
}
