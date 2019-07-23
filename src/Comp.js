import React from "react";
import { connect } from "react-redux";

function toggleLesson(lesson) {
	console.log(lesson)
	return {
		type: "TOGGLE_LESSON",
		lesson
	};
}

function Comp({ arr, dispatch }) {
	return (
		<div>
			{arr.map(i => (
				<div key={i.id}>
					<h3>{i.title}</h3>
					<ul>
						{i.array.map(lesson => (
							<li key={lesson.id}>
								{lesson.title}
								<button onClick={() => dispatch(toggleLesson(lesson))}>
									btn
								</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default connect(state => ({ arr: state.modules }))(Comp);
