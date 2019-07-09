import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = "https://hn.algolia.com/api/v1/search?query=";
const QUERY = "java";

class App extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}
	componentDidMount() {
		fetch(API + QUERY)
			.then(resp => resp.json())
			.then(data => this.setState({ data: data.hits }));
	}
	render() {
		const { data } = this.state;
		return (
			<ul>
				{data.map(hit => (
					<li key={hit.objectID}>
						<a href={hit.url}>{hit.title}</a>
					</li>
				))}
				)}
			</ul>
		);
	}
}

// class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			hits: []
// 		};
// 	}
// 	componentDidMount() {
// 		fetch(API + DEFAULT_QUERY)
// 			.then(response => response.json())
// 			.then(data => this.setState({ hits: data.hits }));
// 	}
// 	render() {
// 		const { hits } = this.state;

// 		return (
// 			<ul>
// 				{hits.map(hit => (
// 					<li key={hit.objectID}>
// 						<a href={hit.url}>{hit.title}</a>
// 					</li>
// 				))}
// 			</ul>
// 		);
// 	}
// }

ReactDOM.render(<App />, document.getElementById("root"));
