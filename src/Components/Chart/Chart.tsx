import "./chart.css";
import ChartBar from "./ChartBar";

type MonthNames =
	"January"
	| "February"
	| "March"
	| "April"
	| "May"
	| "June"
	| "July"
	| "August"
	| "September"
	| "October"
	| "November"
	| "December"
	| "";

export interface IExpenseData {
	label: MonthNames;
	value: number;
}

interface IChart {
	dataPoints: IExpenseData[];
}

const Chart = (props: IChart): JSX.Element => {
	const dataValues: number[] = props.dataPoints.map(data => data.value);
	const calculatedMaxValue = Math.max(...dataValues);

	return (<div className={"chart"}>
		{props.dataPoints.map(dataPoint => <ChartBar
			key={dataPoint.label}
			label={dataPoint.label}
			value={dataPoint.value}
			maxValue={calculatedMaxValue}
		/>)}
	</div>);
};

export default Chart;