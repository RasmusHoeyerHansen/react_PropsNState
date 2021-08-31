import styles from './Button.module.css';

import React, {
	ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren
}             from "react";

const Button = (props: ButtonHTMLAttributes<HTMLElement>) => {
	return (<button type={props.type} className={styles.button} onClick={props.onClick}>
		{props.children}
	</button>);
};

export default Button;
