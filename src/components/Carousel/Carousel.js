import React from "react";

import classes from './Carousel.module.css';

const Carousel = props => {
    return (
        <React.Fragment>
            <div className={classes.carousel}>
                <img
                    src={props.gif}
                    onContextMenu="return false;"
                    alt=""
                />
                <div className={classes.carousel_content}>
                    <h1>Welcome</h1>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Carousel;