import { createStore } from "redux";

const INITIAL_STATE = {
	activeLesson: null,
	activeModule: null,
	modules: [
		{
			id: 1,
			title: "title",
			array: [{ id: 1, title: "LESSON" }, { id: 2, title: "LESSON2" }]
		},
		{
			id: 2,
			title: "title2",
			array: [{ id: 3, title: "LESSON3" }, { id: 4, title: "LESSON4" }]
		}
	]
};

function reducer(state = INITIAL_STATE, action) {
	console.log("test");
	return state;
}

const store = createStore(reducer);
export default store;
