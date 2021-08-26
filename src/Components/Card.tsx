import React, {
	FC,
	FunctionComponent,
	ReactChildren,
	ReactNode
} from "react";
interface CardProps extends React.HTMLAttributes<HTMLElement>
{

}

const Card = (props : CardProps) : JSX.Element => {
	const classes = 'card ' + props.className;
	return (
		<div className={classes}>
			{props.children}
		</div>
	);
}



export default Card;