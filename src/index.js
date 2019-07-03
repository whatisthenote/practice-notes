import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = { name: "NAME" };
	}
	render() {
		setTimeout(() => {
			this.setState({ name: "NAME2" });
		}, 1000);
		return <div>HELLO {this.state.name}</div>;
	}
}

ReactDOM.render(<Layout />, document.getElementById("root"));
