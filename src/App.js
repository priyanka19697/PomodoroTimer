import React, { Component } from "react";
import Timer from "./components/Timer";
import ChildTimer from "./components/ChildTimer.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      tasktime: 25,
      breaktime: 5,
      currentTime: "25 : 00",
      session: "work",
      timerRunning: false,
      timerId: 0,
      resume: false,
      resumetime: 0
    };

    this.state = {
      ...this.initialState
    };

    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.setTimerRunning = this.setTimerRunning.bind(this);
    this.setTimerPaused = this.setTimerPaused.bind(this);
  }

  increaseTime(name) {
    if (name === "Task") {
      this.setState({
        tasktime: this.state.tasktime + 1
      });
      console.log("increasing" + name + "time");
    } else {
      this.setState({
        breaktime: this.state.breaktime + 1
      });
      console.log("increasing" + name + "time");
    }
  }
  decreaseTime(name) {
    if (name === "Task") {
      this.setState({
        tasktime: this.state.tasktime - 1
      });
      console.log("decreasing" + name + "time");
    } else {
      this.setState({
        breaktime: this.state.breaktime + 1
      });
      console.log("decreasing" + name - "time");
    }
  }

  resetTime(name) {
    name === "work"
      ? this.setState({
          tasktime: 25
        })
      : this.setState({
          breaktime: 5
        });
  }

  changeSession() {
    this.state.session === "work"
      ? this.setState({
          session: "break"
        })
      : this.setState({
          session: "work"
        });
  }

  startTimer = (mins, secs) => {
    let time = parseInt(mins) * 60 + parseInt(secs);
    let minutes, seconds;
    let runningTimer = setInterval(() => {
      this.setState({ timerId: runningTimer });
      const isTimerRunning = this.state.timerRunning;
      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.setState({ currentTime: `${minutes} : ${seconds}` });
      if (isTimerRunning) {
        time -= 1;
      }
      if (time === 0) {
        if (this.state.session === "work") {
          this.setState({
            session: "break",
            timerRunning: true
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.breaktime);
        } else if (this.state.session === "break") {
          this.setState({
            session: "work",
            timerRunning: true
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.tasktime);
        } else {
          window.alert("something went wrong");
        }
      }
    }, 1000);
  };

  setCurrentTime = time => {
    this.setState({
      currentTime: time
    });
  };

  setTimerRunning = () => {
    this.setState({
      timerRunning: true
    });
  };

  setTimerPaused() {
    let time = this.state.currentTime;
    console.log(this.state, "before paused");
    this.setState(
      {
        timerRunning: false,
        resume: true,
        resumetime: time
      }
      //() => console.log(this.state, "when timer paused")
      //for accessing current state, if function make direct call else use a callback function
    );
    console.log(this.state, "when timer paused");
    clearInterval(this.state.timerId);
  }

  resetPomodoroTimer = () => {
    console.log(this.state, "state while resetting timer");
    clearInterval(this.state.timerId);
    this.setState({
      tasktime: this.state.tasktime,
      breaktime: this.state.breaktime,
      currentTime: this.state.tasktime + " : 00",
      session: "work",
      timerRunning: false,
      timerId: 0,
      resume: false,
      resumetime: 0
    });
  };

  render() {
    // const timerProps = {
    //   startTimer: startTimer,
    //   setCurrentTime: setCurrentTime,
    //   setTimerRunning: setTimerRunning
    // }{...timerProps};

    const childTimerProps = {
      tasktime: this.state.tasktime,
      increaseTime: this.increaseTime,
      decreaseTime: this.decreaseTime,
      reset: this.resetTime,
      session: this.state.session,
      breaktime: this.state.breaktime
    };
    const timerProps = {
      startTimer: this.startTimer,
      setTimerRunning: this.setTimerRunning,
      timerRunning: this.state.timerRunning,
      setTimerPaused: this.setTimerPaused,
      resetPomodoroTimer: this.resetPomodoroTimer,
      session: this.state.session,
      currentTime: this.state.currentTime,
      tasktime: this.state.tasktime,
      breaktime: this.state.breaktime,
      timerId: this.state.timerId,
      resume: this.state.resume,
      resumetime: this.state.resumetime
    };
    return (
      <div className="app">
        <h1>Pomodoro Timer</h1>
        <Timer {...timerProps} />
        <div>
          <span>
            <ChildTimer {...childTimerProps} name="Task" />
            <ChildTimer {...childTimerProps} name="Break" />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
