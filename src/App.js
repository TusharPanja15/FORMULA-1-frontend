import React from 'react';

import EventsList from './components/Events/EventsList';
import './App.css';
import './styles/global.css';

import saudi_arabia from "./images/tracks/saudi_arabia.png";
import australia from "./images/tracks/australia.png";
import bahrain from "./images/tracks/bahrain.png";
import spain from "./images/tracks/spain.png";

function App() {

  const eventsJSONData = [
    { track_image_icon: saudi_arabia },
    { track_image_icon: australia },
    { track_image_icon: bahrain },
    { track_image_icon: spain }
  ];

  return (
    <EventsList eventsData={eventsJSONData} />
  );
}

export default App;
