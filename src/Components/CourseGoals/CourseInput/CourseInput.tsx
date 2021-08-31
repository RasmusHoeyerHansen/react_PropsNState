import React, {FormEvent, useState} from "react";

import AddGoalButton     from "../../UI/Button/Button";
import "./CourseInput.css";
import {HTMLChangeEvent} from "../../../TypesAndClasses/HTMLChangeEvent";
import styled            from "styled-components";

interface ICourseInput {
	onAddGoal: (enteredText: string) => void;
}

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: mistyrose;
  }

  &.invalid label {
    color: red;
  }
`;

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
		{/* Apply dynamic CSS classes. One could also use props.*/}
		<FormControl className={!isValid ? "invalid" : ""}>
			<input
				type="text" onChange={goalInputChangeHandler}
			/>
		</FormControl>
		<AddGoalButton type="submit">Add Goal</AddGoalButton>
	</form>);
};

export default CourseInput;
