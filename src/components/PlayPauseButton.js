import React, { Component } from "react";

class PlayPauseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "start",
      value: "start"
    };
    this.handleCountDown = this.handleCountDown.bind(this);
  }

  handleCountDown() {
    const { pauseCountDown, startCountDown } = this.props;
    if (this.state.name === "start") {
      startCountDown();
      this.setState({
        name: "pause",
        value: "pause"
      });
    } else {
      this.setState({
        name: "start",
        value: "start"
      });
      pauseCountDown();
    }
  }
  render() {
    console.log(this.props, "from button");
    return (
      <div className="timer">
        <button
          id="start-pause"
          name={this.state.name}
          onClick={this.handleCountDown}
        >
          {this.state.value}
        </button>
        <button onClick={this.props.resetPomodoroTimer}>reset</button>
      </div>
    );
  }
}
export default PlayPauseButton;
