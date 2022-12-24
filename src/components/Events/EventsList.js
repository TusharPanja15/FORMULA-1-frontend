import React from "react";

import Card from '../UI/Card';
import EventImage from './EventData/EventImage';
import EventTitle from './EventData/EventTitle';

import classes from './EventsList.module.css';

const EventsList = props => {

    return (
        <div className={classes.flex_container}>
            {props.eventsData.map(event =>
                <Card className={classes.card_container} >
                    <EventImage
                        imgURL={event.track_image_icon}
                        className={classes.card_image}
                    />
                    <EventTitle className={classes.card_content} />
                </Card>
            )}
        </div>
    );
};

export default EventsList;