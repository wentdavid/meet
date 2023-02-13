import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import WelcomeScreen from "./WelcomeScreen";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import { getEvents, extractLocations,checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
    numberOfEvents: 32,
  };

  async componentDidMount() {
    console.log("component did mount");
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    // If code exists, or if token is valid, user is authorized
    const authorized = code || isTokenValid;

    // Check if localhost
    const isLocal = window.location.href.indexOf("localhost") > -1 ? true : false;

    this.setState({ showWelcomeScreen: !(authorized || isLocal) });
    if ((authorized || isLocal) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />;
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
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} 
        getAccessToken={() => {getAccessToken()}} />
      </div>
    );
  }
}

export default App;
