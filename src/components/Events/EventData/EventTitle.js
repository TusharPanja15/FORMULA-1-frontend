import React from "react";

const EventImage = props => {

    return (
        <div className={`${props.className}`}>
            <h3>SPAIN</h3>
            <h1>{props.eventNamePROP}</h1>
            <p>28-30 Aug</p>
        </div>
    );
};

export default EventImage;