import React from "react";

const EventCountryFlag = props => {

    return (
        <img
            src={props.countryFlagImage}
            className={props.className}
            alt="hes"
        />
    );
};

export default EventCountryFlag;