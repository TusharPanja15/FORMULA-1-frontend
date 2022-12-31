import React from "react";

import Card from '../UI/Card/Card';
import EventCountryFlag from './EventData/EventCountryFlag';
import EventImage from './EventData/EventImage';
import EventTitle from './EventData/EventTitle';

import classes from './EventsList.module.css';

const EventsList = props => {

    return (
        <React.Fragment>
            <div className={classes.flex_container}>
                {props.eventsData.map(event =>
                    <Card className={classes.card_container} key={Math.random()} >
                        <EventCountryFlag
                            countryFlagImage={event.flag_image_icon}
                            className={classes.card_flag_image}
                        />
                        <EventImage
                            imgURL={event.track_image_icon}
                            className={classes.card_image}
                        />
                        <EventTitle className={classes.card_content} eventNamePROP={event.eventName} />
                    </Card>
                )}
            </div>
        </React.Fragment>
    );
};

export default EventsList;