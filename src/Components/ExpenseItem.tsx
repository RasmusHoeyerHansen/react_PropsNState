import "./ExpenseItem.css";

export interface ExpenseItemProp {
	title: string,
	amount: number,
	date: Date
}


const ExpenseItem = (props : ExpenseItemProp): JSX.Element => {
	const day = props.date.getDate();
	const month = props.date.getMonth();
	const year = props.date.getFullYear();

	return (
		<div className="expense-item">

			<ExpenseDate day={day} month={month} year={year} />

			<div className="expense-item__description">
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">
				{props.amount}
			</div>
		</div>
	);
};

type ExpenseDateProps = {
	day: number;
	month: number;
	year: number;
}

function ExpenseDate(props: ExpenseDateProps) {
	const today = new Date();
	const dayString = today.toLocaleString("da", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});
	return <div>{dayString}</div>;

}

export default ExpenseItem;


