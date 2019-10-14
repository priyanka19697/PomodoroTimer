import React, { Component } from "react";
// import Button from "./Button";

class Timer extends Component {
  startCountDown = () => {
    const { setTimerRunning, session, resume } = this.props;
    const time = this.props.currentTime.split(":").map(function(item) {
      return item.trim();
    });
    setTimerRunning();
    if (resume === false) {
      session === "work"
        ? this.props.startTimer(this.props.tasktime)
        : this.props.startTimer(this.props.breaktime);
    } else {
      session === "work"
        ? this.props.resumeTimer(time[0], time[1])
        : this.props.resumeTimer(time[0], time[1]);
    }
    console.log(time);
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
