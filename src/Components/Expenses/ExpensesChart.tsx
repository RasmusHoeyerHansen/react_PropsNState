import {IExpenseInputItem}   from "./ExpenseItem";
import Chart, {IExpenseData} from "../Chart/Chart";


interface IExpenseChart {
	expenses : IExpenseInputItem[];
}

const ExpensesChart = (props : IExpenseChart) : JSX.Element => {
	const chartDataPoints : IExpenseData[] =
			  [
		{label: "January", value : 0},
		{label: "February", value : 0},
		{label: "March", value : 0},
		{label: "April", value : 0},
		{label: "May", value : 0},
		{label: "June", value : 0},
		{label: "July", value : 0},
		{label: "August", value : 0},
		{label: "September", value : 0},
		{label: "October", value : 0},
		{label: "November", value : 0},
		{label: "December", value : 0}
	];

	for (let e of props.expenses){
		const month = e.date.getMonth();
		const a = parseFloat(e.amount);
		chartDataPoints[month].value += parseFloat(e.amount);
	}


	return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;