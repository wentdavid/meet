import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
import "./App.css";


class NumberOfEvents extends Component {
  state = {
    num: 32,
    errorText: "",
  };

  changeNum = (value) => {
    let num = parseInt(value);
    let errorText = "";
    if (isNaN(num) || num < 1) {
      num = 1;
      errorText = "Number must be between 1 and 32, using default of 1.";
    }
    if (num > 32) {
      num = 32;
      errorText = "Number must be between 1 and 32, using maximum of 32.";
    }
    this.setState({
      errorText: errorText,
      num: num,
    });
    this.props.updateNumberOfEvents(undefined, num);
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 32 });
  }

  render() {
    const { num, errorText } = this.state;
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={errorText} />
        <label>
          Number of Events
          <input
            className="num"
            type="number"
            value={num}
            onChange={(event) => {
              this.changeNum(event.target.value);
            }}
          ></input>
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;
