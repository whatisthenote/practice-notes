import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

class App extends Component {
	state = {
		field:{}
	}
	submit = field => {
		// console.log(field);
		this.setState({ field })
	};
	render() {
		return (
			<div>
				<PostForm submit={field => this.submit(field)} />
				<p>{JSON.stringify(this.state.field, null, 2)}</p>
				<Posts />
			</div>
		);
	}
}

export default App;
