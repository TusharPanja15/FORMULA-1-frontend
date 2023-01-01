import React from "react";

import Card from "../Card/Card";
import classes from './Container.module.css';

const Container = props => {

    return (
        <div className={`${classes.flex_container} ${props.className}`}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1>{props.header}</h1>
                </div>
                <div className={classes.flex_card_container}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Container;