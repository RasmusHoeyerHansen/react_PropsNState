import {ExpenseDate} from "./ExpenseDate";
import "./expenses.css"
import ExpenseItem, {ExpenseItemProp} from "./ExpenseItem";
import Card from "./Card";

export interface ExpenseItemListProp {
	items : ExpenseItemProp[]
}

const Expenses = (props : ExpenseItemListProp): JSX.Element => {



	return (
	< >
		{props.items.map(item => (
			<Card className={"expenses"}>
			<ExpenseItem
				title={item.title}
				date={item.date}
				amount={item.amount}/>
			</Card>
		))}
	</>
	);
};

export default Expenses;
