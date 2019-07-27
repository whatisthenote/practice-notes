import React, { Component } from "react";
import { createStore, combineReducers } from "redux";

export default class App extends Component {
	render() {
		return <div>hello darkness my old friend</div>;
	}
}

// const reducer = (state = 5) => {
// 	return state
// }
// const store = createStore(reducer)

// const store = createStore((state = 5) => state)
// const currentState = store.getState()
// console.log(currentState)

// const store = createStore((state = { login: false }) => state);
// const loginAction = () => {
// 	return {
// 		type:"LOGIN"
// 	}
// }
//store.dispatch(loginAction())

// const defaultState = {
// 	login: false
// };
// const reducer = (state = defaultState, action) => {
// 	console.log(action)
// 	if (action.type === "LOGIN") {
// 		return {
// 			login: true
// 		};
// 	} else {
// 		return defaultState;
// 	}
// };
// const store = createStore(reducer);
// const loginAction = () => {
// 	return {
// 		type: "LOGIN"
// 	};
// };
// store.dispatch(loginAction())
// console.log(store.getState())

// const defaultState = {
// 	authenticated: false
// };
// function reducer(state = defaultState, action) {
// 	switch (action.type) {
// 		case "LOGIN":
// 			return { authenticated: true };
// 		case "LOGOUT":
// 			return { authenticated: false };
// 		default:
// 			break;
// 	}
// }
// const store = createStore(reducer);
// function login() {
// 	return {
// 		type: "LOGIN"
// 	};
// }
// function logout() {
// 	return {
// 		type: "LOGOUT"
// 	};
// }

// const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";
// const defaultState = {
// 	authenticated: false
// };
// function reducer(state = defaultState, action) {
// 	switch (action.type) {
// 		case LOGIN:
// 			return { authenticated: true };
// 		case LOGOUT:
// 			return {
// 				authenticated: false
// 			};
// 		default:
// 			return state;
// 	}
// }
// const store = createStore(reducer);
// function login() {
// 	return {
// 		type: LOGIN
// 	};
// }
// function logout() {
// 	return {
// 		type: LOGOUT
// 	};
// }

// const ADD = "ADD";
// function reducer(state = 0, action) {
// 	switch (action.type) {
// 		case ADD:
// 			return state + 1;
// 		default:
// 			return state;
// 	}
// }
// const store = createStore(reducer);
// let count = 0;
// const addOne = () => (count += 1);
// store.subscribe(addOne);
// store.dispatch({ type: ADD });
// console.log(count);
// store.dispatch({ type: ADD });
// console.log(count);

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case INCREMENT:
// 			return state + 1;
// 		case DECREMENT:
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// };
// const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";
// const userLogin = (state = { authenticated: false }, action) => {
// 	switch (action.type) {
// 		case LOGIN:
// 			return {
// 				authenticated: true
// 			};
// 		case LOGOUT:
// 			return {
// 				authenticated: false
// 			};
// 		default:
// 			return state;
// 	}
// };
// const rootReducer = combineReducers({
// 	auth: userLogin,
// 	count: counter
// });
// const store = createStore(rootReducer);
// store.dispatch({type:LOGIN})

// const ADD_NOTE = "ADD_NOTE";
// const notes = (state = "Initial state", action) => {
// 	switch (action.type) {
// 		case ADD_NOTE:
// 			return action.text;
// 		default:
// 			return state;
// 	}
// };
// const addText = note => {
// 	return {
// 		type: ADD_NOTE,
// 		text: note
// 	};
// };
// const store = createStore(notes);
// console.log(store.getState())
// store.dispatch(addText("HELLO"))
// console.log(store.getState())
