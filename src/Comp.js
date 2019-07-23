import React from "react";
import { connect } from "react-redux";

function Comp({ modules, dispatch }) {
	return (
		<div>
			{modules.map(modules => (
				<div key={modules.id}>
					<h3>{modules.title}</h3>
					<ul>
						{modules.lessons.map(lesson => (
							<li key={lesson.id}>
								{lesson.title}
								<button onClick={() => dispatch(toggleLesson(module, lesson))}>
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

function toggleLesson(module, lesson) {
	return {
		type: "TOGGLE_LESSON",
		lesson,
		module
	};
}

export default connect(state => ({ modules: state.modules }))(Comp);
