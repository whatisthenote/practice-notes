import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = "https://hn.algolia.com/api/v1/search?query=";
const QUERY = "java";

class App extends Component {
	constructor() {
		super();
		this.state = { data: {} };
	}
	componentDidMount() {
		fetch(API + QUERY)
			.then(resp => resp.json())
			.then(data => this.setState({ data: data }));
	}
	render() {
		const { data } = this.state
		const { hits } = data
		return <div>{console.log(hits)}</div>;
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
