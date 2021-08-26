import Expenses from "./Components/Expenses/Expenses";
import {ExpenseItemProp} from "./Components/Expenses/ExpenseItem";
import "./Components/Expenses/expenses.css";


function App() {

	const expenses: ExpenseItemProp[] = [
		{
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)},
		{
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		}
	];

	return (
		<div>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
