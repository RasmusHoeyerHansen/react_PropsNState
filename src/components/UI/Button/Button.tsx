import React, {
	ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren
}             from "react";
import styled from "styled-components";

interface ICustomButton extends PropsWithChildren<ButtonHTMLAttributes<any>> {
	type: "submit" | "reset" | "button" | undefined,
	onclick?: MouseEventHandler;
}

//Using styled components
const Button = styled.button<ICustomButton>`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

`;

export default Button;