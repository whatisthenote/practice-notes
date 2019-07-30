import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

export default class App extends Component {
	render() {
		return (
			<div>
				<AppWrapper />
			</div>
		);
	}
}

const ADD = "ADD";
const action = msg => ({ type: ADD, msg });
const reducer = (state = "", action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.msg];
		default:
			return state;
	}
};
const store = createStore(reducer);
const mapStateToProps = state => ({ messages: state });
const mapDispatchToProps = dispatch => ({
	submitMessage: newMessage => {
		dispatch(action(newMessage));
	}
});

class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
	}
	change = e => this.setState({ input: e.target.value });
	submit = () => {
		this.props.submitMessage(this.state.input);
		console.log(this.props.messages);
	};
	render() {
		return (
			<div>
				<input onChange={this.change} />
				<button onClick={this.submit}>btn</button>
			</div>
		);
	}
}
const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Comp);

class AppWrapper extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<Container />
				</Provider>
			</div>
		);
	}
}
