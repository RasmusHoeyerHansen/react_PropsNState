import Expenses            from "./Components/Expenses/Expenses";
import "./Components/Expenses/expenses.css";
import NewExpense          from "./Components/NewExpenses/NewExpense";
import DUMMYEXPENSES       from "./MockData/Data"
import {IExpenseInputItem} from "./Components/Expenses/ExpenseItem";
import {useState}          from "react";



function App() {
	const [expenses, setExpenses]=useState<IExpenseInputItem[]>(DUMMYEXPENSES);
	const addExpenseHandler  = (expense : IExpenseInputItem) => {
		setExpenses((prevExpenses) =>{
			return [expense, ...prevExpenses]
		});
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
