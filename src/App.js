import React, { useState, useEffect } from 'react';

import Container from './components/UI/Container/Container';
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import MainHeader from './components/Header/MainHeader/MainHeader';
import EventsList from './components/Events/EventsList';
import Constructors from './components/Constructors/Constructors';

import './App.css';
import './styles/global.css';

import saudi_arabia_track from "./images/tracks/saudi_arabia.png";
import australia_track from "./images/tracks/australia.png";
import bahrain_track from "./images/tracks/bahrain.png";
import spain_track from "./images/tracks/spain.png";

import saudi_arabia_flag from "./images/country_flags/saudi_arabia.jpg";
import australia_flag from "./images/country_flags/australia.jpg";
import bahrain_flag from "./images/country_flags/bahrain.jpg";
import spain_flag from "./images/country_flags/azerbaijan.jpg";

import gif from "./images/ezgif.com-gif-maker-9.gif";
// import gif from "./images/tracks/saudi_arabia.png";


const App = () => {

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      fetch('https://formula-1-backend-prod.onrender.com/events')
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setEventData(data.data);
        })
    }, 500);

    return () => {
      clearTimeout(interval);
    }
  }, []);


  const test = [
    {
      track_image_icon: saudi_arabia_track,
      flag_image_icon: saudi_arabia_flag
    },
    {
      track_image_icon: australia_track,
      flag_image_icon: australia_flag
    },
    {
      track_image_icon: bahrain_track,
      flag_image_icon: bahrain_flag
    },
    {
      track_image_icon: spain_track,
      flag_image_icon: spain_flag
    },
    {
      track_image_icon: saudi_arabia_track,
      flag_image_icon: saudi_arabia_flag
    },
    {
      track_image_icon: australia_track,
      flag_image_icon: australia_flag
    },
    {
      track_image_icon: bahrain_track,
      flag_image_icon: bahrain_flag
    },
  ];

  const eventsJSONData = test.map(object => {
    return {
      ...object,
      eventName: eventData.map(event => {
        return event.eventName
      })[1]
    }
  });


  return (
    <React.Fragment>
      <MainHeader />
      <Carousel gif={gif} />
      <Container header={"Shop"} />
      <Constructors />
      <Cart header={"My Cart"} />
      <EventsList header={"Events"} eventsData={eventsJSONData} eventNameAPI={eventData.eventName} />
    </React.Fragment>
  );
}

export default App;
