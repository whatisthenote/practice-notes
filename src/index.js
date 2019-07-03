import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = { name: "NAME" };
	}
	render() {
		return <div>HELLO {this.state.name}</div>;
	}
}

ReactDOM.render(<Layout />, document.getElementById("root"));
