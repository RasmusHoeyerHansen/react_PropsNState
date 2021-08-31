import React, {useState} from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput    from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

export interface ICourseGoal {
	text: string;
	id: string;
}

const App = () => {
	const [courseGoals, setCourseGoals] = useState([{
		text: "Do all exercises!", id: "g1"
	}, {text: "Finish the course!", id: "g2"}, {
		text: "Convert to typescript", id: "g3"
	}]);

	const addGoalHandler = (enteredText: string) => {
		setCourseGoals(prevGoals => {
			const updatedGoals = [...prevGoals];
			updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
			return updatedGoals;
		});
	};

	const deleteItemHandler = (goalId: string) => {
		setCourseGoals(prevGoals => {
			const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
			return updatedGoals;
		});
	};

	let content = (
		<p style={{textAlign: "center"}}>No goals found. Maybe add one?</p>);

	if (courseGoals.length > 0) {
		content = (
			<CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>);
	}

	return (<>
		<section id="goal-form">
			<CourseInput onAddGoal={addGoalHandler}/>
		</section>

	</>);
};

export default App;
