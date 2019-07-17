import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {}
		};
	}
	func = field => {
		this.setState({
			field: {
				...this.state.field,
				...field
			}
		});
	};
	render() {
		return (
			<div>
				<Postform toApp={value => this.func(value)} />
				<p>{JSON.stringify(this.state.field)}</p>
			</div>
		);
	}
}
class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
	}
	change = event => {
		this.setState({ [event.target.name]: event.target.value });
		this.props.toApp({ [event.target.name]: event.target.value });
	};
	submit = event => {
		event.preventDefault();
		console.log(this.state);
		this.setState({ username: "", password: "" });
	};
	render() {
		return (
			<div>
				<form>
					<input name="username" value={this.state.username} onChange={e => this.change(e)} />
					<input name="password" value={this.state.password} onChange={e => this.change(e)} />
					<button onClick={e => this.submit(e)}>Submit</button>
				</form>
			</div>
		);
	}
}
