import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = "https://hn.algolia.com/api/v1/search?query=";
const QUERY = "javaScript";

class App extends Component {
	constructor() {
		super();
		this.state = { list: [], isLoading: false };
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(API + QUERY)
			.then(resp => resp.json())
			.then(data => this.setState({ list: data.hits, isLoading: false }));
	}
	render() {
		const { list, isLoading } = this.state;
		if (isLoading) return <h1>Loading...</h1>;
		return (
			<div>
				<h1>LIST</h1>
				<Error>
					<List list={list} />
				</Error>
			</div>
		);
	}
}
function List({ list }) {
	return (
		<div>
			{list.map(res => {
				return (
					<li key={res.objectID}>
						<a href={res.url}>{res.title}</a>
					</li>
				);
			})}
		</div>
	);
}
class Error extends Component {
	constructor() {
		super();
		this.state = { error: false };
	}
	componentDidCatch() {
		this.setState({ error: true });
	}
	render() {
		if (this.state.error) return <p>ERROR</p>;
		return this.props.children;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
