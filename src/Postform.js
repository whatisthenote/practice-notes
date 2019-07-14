import React, { Component } from "react";

class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			comment: ""
		};
	}
	change = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	submit = event => {
		event.preventDefault();
		const post = {
			title: this.state.title,
			comment: this.state.comment
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
				<h1>ADD POST</h1>
				<form onSubmit={this.submit}>
					<div>
						Title: <input name="title" value={this.state.title} onChange={this.change} />
						Comment: <textarea name="comment" value={this.state.body} onChange={this.change} />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

// class Postform extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: "",
// 			body: ""
// 		};
// 	}
// 	change = event => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};
// 	submit = event => {
// 		event.preventDefault();
// 		const post = {
// 			title: this.state.title,
// 			body: this.state.body
// 		};
// 		fetch("https://jsonplaceholder.typicode.com/posts", {
// 			method: "POST",
// 			headers: {
// 				"content-type": "application/json"
// 			},
// 			body: JSON.stringify(post)
// 		})
// 			.then(resp => resp.json())
// 			.then(data => console.log(data));
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<h1>ADD POST</h1>
// 				<form onSubmit={this.submit}>
// 					<div>
// 						<label>Title: </label>
// 						<input name="title" value={this.state.title} onChange={this.change} />
// 						<label>Body: </label>
// 						<textarea name="body" value={this.state.body} onChange={this.change} />
// 					</div>
// 					<button type="submit">Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

export default Postform;
