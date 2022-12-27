import React from 'react';

import NavigationBar from './components/UI/NavBar';
import Carousel from './components/UI/Carousel';
import EventsList from './components/Events/EventsList';
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


function App() {

  const eventsJSONData = [
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
    }
  ];

  return (
    <React.Fragment>
      <NavigationBar />
      <Carousel gif={gif}/>
      <EventsList eventsData={eventsJSONData} />
    </React.Fragment>
  );
}

export default App;
