import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = "https://hn.algolia.com/api/v1/search?query=";
const QUERY = "java";

class App extends Component {
	constructor() {
		super();
		this.state = { data: [], isLoading: false };
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(API + QUERY)
			.then(resp => resp.json())
			.then(data => this.setState({ data: data.hits, isLoading: false }));
	}
	render() {
		const { data, isLoading } = this.state;
		if (isLoading) return <p>Loading...</p>;
		return (
			<div>
				<h1>LIST</h1>
				<Error>
					<List data={data} />
				</Error>
			</div>
		);
	}
}
function List({ data }) {
	if (true) {
		throw new Error("error");
	}
	return (
		<ul>
			{data.map(hit => (
				<li key={hit.objectID}>
					<a href={hit.url}>{hit.title}</a>
				</li>
			))}
		</ul>
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
		if (this.state.error) {
			return <p>:(</p>;
		}
		return this.props.children;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
