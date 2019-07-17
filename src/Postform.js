import React, { Component } from "react";

export default class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: ""
		};
	}
	change = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submit = event => {
		event.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "post",
			body: JSON.stringify(post),
			headers: {
				"content-type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => console.log(data));
	};

	render() {
		return (
			<div>
				<h1>Add post</h1>
				<form>
					<input
						placeholder="title"
						name="title"
						value={this.state.title}
						onChange={this.change}
					/>
					<textarea
						placeholder="body"
						name="body"
						value={this.state.body}
						onChange={this.change}
					/>
					<button onClick={this.submit}>Submit</button>
				</form>
			</div>
		);
	}
}
