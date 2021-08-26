import "./expensedate.css";
interface ExpenseDateProps {
	day: number;
	month: number;
	year: number;
}
export function ExpenseDate(props: ExpenseDateProps) {
	const today = new Date();
	const year = today.toLocaleString("da", {year: "numeric"});
	const month = today.toLocaleString("da", {month: "2-digit"});
	const day = today.toLocaleString("da", {day: "2-digit"});
	return(
		<div className={"expense-date"} >
			<div className={"expense-date__month"}>{month}</div>
			<div className={"expense-date__year"}>{year}</div>
			<div className={"expense-date__day"}>{day}</div>
		</div>


	);

}