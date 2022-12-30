import React from 'react';
import LazyLoad from 'react-lazy-load';

import Button from './components/UI/Button/Button';
import Carousel from './components/Carousel/Carousel';
import NavigationBar from './components/Header/Navigation/NavBar';
import EventsList from './components/Events/EventsList';
import Content from './components/Content/Content';

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
      <Carousel gif={gif} />
      <Content />
      <EventsList eventsData={eventsJSONData} />
    </React.Fragment>
  );
}

export default App;
