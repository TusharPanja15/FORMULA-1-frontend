import React from "react";

import classes from './Button.module.css';

const Button = props => {
    return (
        <button
            className={`${classes.button} ${props.className}`}
            // type={props.buttonType}
        >
            {props.value}
        </button>
    );
};

export default Button;