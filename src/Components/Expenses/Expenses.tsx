import "./expenses.css";
import ExpenseItem, {IExpenseInputItem} from "./ExpenseItem";
import {useState}                       from "react";
import Card                             from "../UI/Card";
import ExpenseFilter                    from "./ExpenseFilter";
import ExpensesChart                    from "./ExpensesChart";



export interface ExpensesProp {
	items: IExpenseInputItem[];
}

const ExpensesList = (props: { items: IExpenseInputItem[] }): JSX.Element => {
	let content: JSX.Element | JSX.Element[] = <p>No expenses</p>;

	if (props.items.length > 0) content = props.items.map(item => (<ExpenseItem
		key={item.date + "_" + item.title + "_" + item.amount}
		date={item.date}
		amount={item.amount}
		title={item.title}
	/>));

	return <div>{content}</div>;
};

const Expenses = (props: ExpensesProp): JSX.Element => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (year: string) => {
		setFilteredYear(year);
	};

	const filteredExpenses: IExpenseInputItem[] = props.items.filter(item => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return <Card className={"expenses"}>
		<ExpenseFilter
			onChangeFilter={filterChangeHandler}
			selected={filteredYear}/>
		<ExpensesChart expenses={filteredExpenses}/>
		<ExpensesList items={filteredExpenses}/>
	</Card>;

};


export default Expenses;
