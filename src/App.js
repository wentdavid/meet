import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    console.log("component did mount");
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateNumberOfEvents = (event, value) => {
    this.setState({ numberOfEvents: value });
  };

  render() {
    console.log("APp Loaded", this.state);
    if (this.state.events.length === 0) return <div className="App" />;

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={this.updateNumberOfEvents}
          num={this.state.numberOfEvents}
        />
        <EventList
          events={this.state.events.slice(0, this.state.numberOfEvents)}
        />
      </div>
    );
  }
}

export default App;
