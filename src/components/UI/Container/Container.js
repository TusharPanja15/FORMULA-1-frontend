import React from "react";

import Card from "../Card/Card";
import classes from './Container.module.css';

const Container = props => {

    return (
        <div className={`${classes.flex_container} ${props.className}`}>
            <Card className={classes.container} >
                <h1 className={classes.header}>{props.header}</h1>
                {props.children}
            </Card>
        </div>
    );
};

export default Container;