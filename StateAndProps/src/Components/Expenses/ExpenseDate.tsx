import "./expensedate.css";

interface ExpenseDateProps {
	date: Date;
}

const ExpenseDate = (props: ExpenseDateProps): JSX.Element => {
	const year = props.date.toLocaleString("da", {year: "numeric"});
	const month = props.date.toLocaleString("da", {month: "2-digit"});
	const day = props.date.toLocaleString("da", {day: "2-digit"});
	return (
		<div className={"expense-date"}>
			<div className={"expense-date__month"}>{month}</div>
			<div className={"expense-date__year"}>{year}</div>
			<div className={"expense-date__day"}>{day}</div>
		</div>
	);
};

export default ExpenseDate;