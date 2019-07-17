import React, { Component } from "react";

export default class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(resp => resp.json())
			.then(posts => this.setState({ posts }));
	}
	render() {
		const items = this.state.posts.map(post => {
			return (
				<div key={post.id}>
					<h3>
						{post.id}, {post.title}
					</h3>
					<p>{post.body}</p>
				</div>
			);
		});
		return <div>{items}</div>;
	}
}
