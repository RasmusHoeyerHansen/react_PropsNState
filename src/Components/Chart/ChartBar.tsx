import "./chartBar.css";

interface IChartBar {
	key: string;
	label: string;
	value: number;
	maxValue: number;
}

const ChartBar = (props: IChartBar): JSX.Element => {
	let barFillHeight = "0%";
	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
	}

	return (
	<div className={"chart-bar"}>
		<div className={"chart-bar__inner"}>
			<div className={"chart-bar__fill"}
				 style={{height: barFillHeight}}/>
		</div>
		<div className={"chart-bar__label"} >{props.label.substr(0,3)}</div>
	</div>);
};

export default ChartBar;