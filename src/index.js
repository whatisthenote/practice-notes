import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		var title = "TITLE";
		return (
			<div>
				<Header title={title} name="NAME" />
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
