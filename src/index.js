import React from "react";
import ReactDOM from "react-dom";

testtest

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome"
		};
	}
	render() {
		setTimeout(() => {
			this.setState({ title: "Welcome 2" });
		}, 1000);
		return (
			<div>
				<Header title={this.state.title} name="NAME" />
				<Header title={"OTHER TITLE"} name="NAME" />
				<div>HELLO </div>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<Title title={this.props.title} />
			</div>
		);
	}
}

class Title extends React.Component {
	render() {
		return <h1>{this.props.title}</h1>;
	}
}

ReactDOM.render(<Layout />, document.getElementById("root"));
