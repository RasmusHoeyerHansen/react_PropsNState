import "./ExpenseItem.css";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

export interface IExpenseInputItem {
	title: string,
	amount: string,
	date: Date
}
/*Presentational/Stateless/dumb components. Only purpose is to render.*/
const ExpenseItem = (props: IExpenseInputItem): JSX.Element => {
	return (
		<Card className={"expense-item"}>
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">
				{props.amount}
			</div>
		</Card>
	);
};


export default ExpenseItem;


