import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: {}
		};
	}

	func = x => {
		this.setState({ x });
	};
	render() {
		return (
			<div>
				<PostForm toProps={field => this.func(field)} />
				<p>{JSON.stringify(this.state.x)}</p>
				<Posts />
			</div>
		);
	}
}

export default App;
