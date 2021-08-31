import React, {FormEvent, FormHTMLAttributes, useState} from "react";

import AddGoalButton     from "../../UI/Button/Button";
import styles            from "./CourseInput.module.css";
import {HTMLChangeEvent} from "../../../TypesAndClasses/HTMLChangeEvent";

interface ICourseInput extends FormHTMLAttributes<HTMLInputElement> {
	onAddGoal: (enteredText: string) => void;
}


const CourseInput = (props: ICourseInput) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);


	const goalInputChangeHandler = (event: HTMLChangeEvent) => {
		if (event.target.value.trim().length > 0) {
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
		<div
			className={`${styles["form-control"]} ${!isValid ? styles.invalid : " "}`}>
			<input
				type="text" onChange={goalInputChangeHandler}
			/>
		</div>
		<AddGoalButton type="submit">Add Goal</AddGoalButton>
	</form>);
};

export default CourseInput;
