import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.startCountDown = this.startCountDown.bind(this);
  }

  startCountDown() {
    if (this.props.state.timerRunning === true) {
      this.props.setCurrentTime("25:00");
      this.props.setTimerRunning();
    } else {
      this.props.state.session === "work"
        ? this.props.startTimer(this.props.state.tasktime)
        : this.props.startTimer(this.props.state.breaktime);
    }
  }

  componentDidMount() {
    this.props.state.session === "work"
      ? this.setState({ time: this.props.state.tasktime })
      : this.setState({ time: this.props.state.breaktime });
  }

  render() {
    console.log(this.props, "from timer");
    return (
      <div className="timer">
        <div>{this.props.state.currentTime}</div>
        <button onClick={this.startCountDown}>start</button>
        <button>restart</button>
      </div>
    );
  }
}

export default Timer;
