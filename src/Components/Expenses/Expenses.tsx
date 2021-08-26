import "./expenses.css";
import ExpenseItem, {ExpenseItemProp} from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

export interface ExpenseItemListProp {
	items: ExpenseItemProp[];
}

const Expenses = (props: ExpenseItemListProp): JSX.Element => {
	return (
		<Card className={"expenses"}>
			{props.items.map(item => (
				<ExpenseItem
					date={item.date}
					amount={item.amount}
					title={item.title}/>
			))}
		</Card>
	);
};

export default Expenses;
