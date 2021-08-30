import React, {ChangeEvent, FormEvent, useState} from "react";

import AddGoalButton from "../../UI/Button/Button";
import "./CourseInput.css";

interface ICourseInput {
	onAddGoal: (enteredText: string) => void;
}

const CourseInput = (props: ICourseInput) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);


	const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 0){
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};


	const formSubmitHandler = (event: FormEvent) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (<form onSubmit={formSubmitHandler}>
		<div className="form-control">
			<label style={{color: !isValid ? "red" : "black"}}>
				Course Goal
			</label>
			<input
				type="text" onChange={goalInputChangeHandler}
				style={{
					borderColor: !isValid ? "rgb(255,0,0,)" : "inherit",
					background: !isValid ? "salmon" : "transparent"
				}}
			/>
		</div>
		<AddGoalButton type="submit">Add Goal</AddGoalButton>
	</form>);
};

export default CourseInput;
