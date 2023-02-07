import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };
  toggleDetails = () => {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p className="event-start">
          {event.start && event.start.dateTime
            ? new Date(event.start.dateTime).toString()
            : ""}
        </p>

        <p className="event-location">{event.location}</p>

        {!collapsed && (
          <div className="event-details">
            <h2 className="about">About Event</h2>
            <a
              className="link"
              href={event.htmlLink}
            >See more details</a>
            <p className="description">{event.description}</p>
          </div>
        )}
        <button className="details-button" onClick={() => this.toggleDetails()}>
          {collapsed ? "Show" : "Hide"} Details
        </button>
      </div>
    );
  }
}

export default Event;
