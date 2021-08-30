import React, {
  ButtonHTMLAttributes,
  MouseEventHandler, PropsWithChildren
} from "react";

import './Button.css';
interface ICustomButton extends PropsWithChildren<ButtonHTMLAttributes<any>> {
  type: 'submit' | 'reset' | 'button' | undefined,
  onclick?: MouseEventHandler;
}

const Button = (props : ICustomButton) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
