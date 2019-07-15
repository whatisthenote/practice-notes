import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

class App extends Component {
	toProps = field => {
		console.log(field);
	};
	render() {
		return (
			<div>
				<PostForm toProps={field => this.toProps(field)} />
				<Posts />
			</div>
		);
	}
}

export default App;
