import React, { Component } from "react";
import Event from './Event';
import {WarningAlert} from './Alert';

class EventList extends Component {
  render() {
    const { events } = this.props;
    const online = navigator.onLine;
    console.log("This events", events);
    return (
      <ul className="EventList">
        {!online && <WarningAlert text="You are currently offline. Events may not be up to date." />}
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;