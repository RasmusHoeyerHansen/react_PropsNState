import React, {ChangeEventHandler} from "react";
import "./expenseFilter.css";

interface FilterProps {
	onChangeFilter: (year: string) => void;
	selected: string;
}

const ExpensesFilter = (props: FilterProps): JSX.Element => {

	const onFilterChange: ChangeEventHandler<HTMLSelectElement>
		= (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selected} onChange={onFilterChange}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
