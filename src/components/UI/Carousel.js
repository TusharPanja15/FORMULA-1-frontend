import React from "react";

import classes from './Carousel.module.css';

const Carousel = props => {
    return (
        <div className={classes.slider}
        // style={{
        //     backgroundImage: `url(${props.gif})`
        // }}
        >
            <img
                src={props.gif}
                onContextMenu="return false;"
                // className={classes.slider}
                alt=""></img>
        </div>
    );
};

export default Carousel;