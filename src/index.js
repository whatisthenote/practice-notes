import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
	constructor() {
		super();
		this.state = { data: [], isLoading: false };
		console.log("cons")
	}
	componentDidMount() {
		this.setState({isLoading:true})
		fetch(API)
			.then(resp => resp.json())
			.then(data => this.setState({ data, isLoading: false }));
			console.log("mount")
	}
	render() {
		const { data, isLoading } = this.state;
		if (isLoading) return <h3>Loading...</h3>;
		return (
			<div>
				<h1>Usernames</h1> 
				<ErrorBoundary>
					<Usernames data={data} />
				</ErrorBoundary>
				{console.log("redner")}</div> 
		);
	}
}
function Usernames({ data }) {
	// throw new Error()
	return (
		<div>
			{data.map(res => {
				return (
					<div key={res.id}>
						<h2>{res.username}</h2>
						<p>
							{res.email}, {res.id}
						</p>
						<hr />
					</div>
				);
			})}
		</div>
	);
}
class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { error: false };
	}
	componentDidCatch() {
		this.setState({ error: true });
	}
	render() {
		if (this.state.error) return <p>:(</p>;
		return this.props.children;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
