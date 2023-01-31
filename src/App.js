import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import Event from "./Event";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";



class App extends Component {
  state = {
    events: [],
    locations: [],
  }
  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <Event />
        <NumberOfEvents />
      </div>
    );
  }
}

updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = events.filter(
      (event) => event.location === location
    );
    this.setState({
      events: locationEvents,
    });
  });
};

export default App;
