import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {}
		};
	}
	func = value => {
		this.setState({
			field: {
				...this.state.field,
				...value
			}
		});
	};
	render() {
		return (
			<div>
				<PostForm onChange={field => this.func(field)} />
				<p>{JSON.stringify(this.state.field)}</p>
				<Posts />
			</div>
		);
	}
}

export default App;
