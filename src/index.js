import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		var title = "TITLE";
		return (
			<div>
				<div>HELLO </div>
				<Header title={title} name="NAME" />
				<Header title={"OTHER TITLE"} name="NAME" />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return <div>{console.log(this.props)}</div>;
	}
}

ReactDOM.render(<Layout />, document.getElementById("root"));
