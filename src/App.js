import React, { Component } from "react";
import Posts from "./Posts";
import PostForm from "./Postform";

class App extends Component {
	render() {
		return (
			<div>
				<PostForm func={x => console.log(x)} />
				<Posts />
			</div>
		);
	}
}

export default App;
