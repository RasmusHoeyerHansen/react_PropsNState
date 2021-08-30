import "./newExpense.css";
import {IExpenseInputItem} from "../Expenses/ExpenseItem";
import ExpenseForm         from "./ExpenseForm1";
import {MouseEventHandler, useState} from "react";


interface NewExpenseProperties {
	onAddExpense: (data: IExpenseInputItem) => void;
}

const NewExpense = (props: NewExpenseProperties): JSX.Element => {
	const [isEditing, setIsEditing] = useState(false);

	const saveDataHandler = (enteredExpenseData: IExpenseInputItem) => {
		const expenseData = {
			...enteredExpenseData, id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = (): void => {
		setIsEditing(true);
	};

	const cancelEditingHandler : MouseEventHandler = (event) => {
		setIsEditing(false);
	}

	return <div className={"new-expense"}>
		{!isEditing ?
			<button onClick={startEditingHandler}>Add expense</button> :
			<ExpenseForm onSaveExpenseData={saveDataHandler} onCancel={cancelEditingHandler}/>}
	</div>;
};

export default NewExpense;

