import ExpenseItem, {ExpenseItemProp} from "./Components/ExpenseItem";

function App() {
	const today = new Date();

	const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

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
		},
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem
				title={expenses[0].title}
				date={expenses[0].date}
				amount={expenses[0].amount}/>
		</div>
	);
}

export default App;
