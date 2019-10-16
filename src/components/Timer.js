import React, { Component } from "react";
import PlayPauseButton from "./PlayPauseButton";

class Timer extends Component {
  startCountDown = () => {
    const { setTimerRunning, session, resume } = this.props;
    const time = this.props.currentTime.split(":").map(function(item) {
      return item.trim();
    });
    setTimerRunning();
    if (resume === false) {
      session === "work"
        ? this.props.startTimer("" + this.props.tasktime, "00")
        : this.props.startTimer("" + this.props.breaktime, "00");
    } else {
      session === "work"
        ? this.props.startTimer(time[0], time[1])
        : this.props.startTimer(time[0], time[1]);
    }
    console.log(this.props, "from timer");
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

  render() {
    const { currentTime, resetPomodoroTimer } = this.props;
    console.log(currentTime, "from timer");
    return (
      <div className="timer">
        <div>{currentTime}</div>
        <span>
          <PlayPauseButton
            className="start-pause"
            startCountDown={this.startCountDown}
            pauseCountDown={this.pauseCountDown}
            resetPomodoroTimer={resetPomodoroTimer}
          />
        </span>
      </div>
    );
  }
}

export default Timer;
