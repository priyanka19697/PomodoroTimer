import React, { Component } from "react";
// import Button from "./Button";

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  startCountDown = () => {
    const { setTimerRunning, session } = this.props;
    setTimerRunning();
    session === "work"
      ? this.props.startTimer(this.props.tasktime)
      : this.props.startTimer(this.props.breaktime);
  };

  pauseCountDown = () => {
    const { setTimerPaused } = this.props;
    setTimerPaused();
  };

  componentDidMount() {
    const { tasktime, breaktime } = this.props;
    this.props.session === "work"
      ? this.setState({ time: tasktime })
      : this.setState({ time: breaktime });
  }

  // displayProps = () => {
  //   console.log(this.props);
  // };

  render() {
    console.log(this.props, "from timer");
    return (
      <div className="timer">
        <div>{this.props.currentTime}</div>
        <button onClick={this.startCountDown}>start</button>
        <button onClick={this.pauseCountDown}>pause</button>
        {/* <Button /> */}
        <button onClick={this.props.resetPomodoroTimer}>reset</button>
      </div>
    );
  }
}

export default Timer;
