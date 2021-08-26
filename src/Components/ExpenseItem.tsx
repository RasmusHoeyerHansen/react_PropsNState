import "./ExpenseItem.css";
import {ExpenseDate} from "./ExpenseDate";
import Card from "./Card";

export type ExpenseItemProp = {
	title: string,
	amount: number,
	date: Date
}


const ExpenseItem = (props: ExpenseItemProp): JSX.Element => {
	const day = props.date.getDate();
	const month = props.date.getMonth();
	const year = props.date.getFullYear();

	return (
		<Card >
			<ExpenseDate day={day} month={month} year={year}/>
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


