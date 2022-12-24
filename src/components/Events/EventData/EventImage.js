import React from "react";

const EventImage = props => {

    return (
        <div
            style={{
                backgroundImage: `url(${props.imgURL})`
            }}
            className={`${props.className}`}
        />
    );
};

export default EventImage;