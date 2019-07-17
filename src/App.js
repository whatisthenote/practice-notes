import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

export default class App extends Component {
	render() {
		return (
			<div>
				<PostForm />
				<h1>Posts</h1>
				<Posts />
			</div>
		);
	}
}
