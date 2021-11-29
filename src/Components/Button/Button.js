import React from "react";
import classes from "./Button.module.css";

const Button = props => {
    return (
        <button {...props} className={classes.buttonStyle}>
            {props.children}
        </button>
    );
};

export default Button;
