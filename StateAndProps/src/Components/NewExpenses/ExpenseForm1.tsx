import React, {
	ChangeEvent,
	FormEvent, MouseEventHandler,
	useState
}                          from "react";
import "./expenseForm.css";
import {IExpenseInputItem} from "../Expenses/ExpenseItem";




interface ExpenseFormProp extends React.HTMLAttributes<HTMLElement> {
	onSaveExpenseData: (data: IExpenseInputItem) => void;
	onCancel : MouseEventHandler<HTMLButtonElement>;
}

const ExpenseForm = (props: ExpenseFormProp): JSX.Element => {
	/* Using object and existing interface to manage state is also
	 possible.
	const [expenseFormData, setExpenseFormData] = useState<IExpenseFormData>({
		amount: '',
		title: '',
		date: ''
	});
	 */

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value);
	};

	const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const submitChangeHandler = (event: FormEvent) => {
		event.preventDefault();
		console.log(amount);
		const expenseData = {
			title: title,
			amount: amount,
			//"2016-02-18T23:59:48.039Z" -> {2016-02-18} T {23:59:48.039Z}"
			date: new Date(date)
		};
		setDate("");
		setTitle("");
		setAmount("");

		props.onSaveExpenseData(expenseData);
	};

	return <form onSubmit={submitChangeHandler}>
		<div className={"new-expense__controls"}>
			<div className={"new-expense__control"}>
				<label>Title</label>
				<input type="text" value={title}
					   onChange={titleChangeHandler}/>
			</div>
			<div className={"new-expense__control"}>
				<label>Amount</label>
				<input type="number" value={amount} min={0.01} step={0.01}
					   onChange={amountChangeHandler}/>
			</div>
			<div className={"new-expense__control"}>
				<label>Date</label>
				<input type="Date" min={"2019-01-01"} max={"2022-12-31"}
					   value={date}
					   onChange={dateChangeHandler}/>
			</div>
		</div>
		<div className={"new-expense__actions"}>
			<button type={"button"} onClick={props.onCancel}>Cancel</button>
			<button type={"submit"}>Add expense</button>
		</div>
	</form>;
};

export default ExpenseForm;