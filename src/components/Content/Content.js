import React from "react";

import Card from '../UI/Card/Card';

import classes from './Content.module.css';

const Content = props => {

    return (
        <React.Fragment>
            <div className={classes.flex_container}>
                {/* <Card className={classes.test}> */}
                    <Card className={classes.card_container} >
                        <h1>Event</h1>
                    </Card>
                {/* </Card> */}
            </div>
        </React.Fragment>
    );
};

export default Content;