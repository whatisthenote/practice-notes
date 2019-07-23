import React, { Component } from "react";
import Comp from "./Comp";
import store from "./store";
import { Provider } from "react-redux";
import Video from "./video";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Video />
				<Comp />
			</Provider>
		);
	}
}
