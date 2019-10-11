import React, { Component } from "react";
import Timer from "./components/Timer";
import TaskTimer from "./components/TaskTimer.js";
import BreakTimer from "./components/BreakTimer.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      tasktime: 25,
      breaktime: 5,
      currentTime: "25 : 00",
      session: "work",
      timerRunning: false,
      timerId: 0
    };

    this.state = {
      ...this.initialState
    };

    this.increaseTaskTime = this.increaseTaskTime.bind(this);
    this.decreaseTaskTime = this.decreaseTaskTime.bind(this);
    this.increaseBreakTime = this.increaseBreakTime.bind(this);
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this);
    this.resetTaskTime = this.resetTaskTime.bind(this);
    this.resetBreakTime = this.resetBreakTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.setTimerRunning = this.setTimerRunning.bind(this);
  }
  increaseTaskTime() {
    this.setState({
      tasktime: this.state.tasktime + 1
    });
    console.log(this.state, "incremented tasktime");
  }
  increaseBreakTime() {
    this.setState({
      breaktime: this.state.breaktime + 1
    });

    console.log(this.state, "incremented breaktime");
  }

  decreaseTaskTime() {
    // this.state.session === "work"
    //   ? (this.setState = {
    //       tasktime: this.state.tasktime - 1
    //     })
    //   : (this.setState = {
    //       breaktime: this.state.breaktime - 1
    //     });
    if (this.state.tasktime > 1) {
      this.setState({
        tasktime: this.state.tasktime - 1
      });
      console.log(this.state, "decremented tasktime");
    }
  }
  decreaseBreakTime() {
    if (this.state.breaktime > 1) {
      this.setState({
        breaktime: this.state.breaktime - 1
      });
      console.log(this.state, "decremented breaktime");
    }
  }

  resetTaskTime() {
    this.setState({
      tasktime: 25
    });
    console.log(this.state.tasktime);
  }

  resetBreakTime() {
    this.setState({
      breaktime: 5
    });
    console.log(this.state.breaktime);
  }
  changeSessionToWork() {
    this.setState({ session: "work" });
  }

  changeSessionToBreak() {
    this.setState({ session: "break" });
  }

  startTimer(duration) {
    // this.setState({
    //   timerRunning: true
    // });
    let time = duration * 60;
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
            timerRunning: false
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.breaktime);
        } else {
          this.setState({
            session: "work",
            timerRunning: true
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.tasktime);
        }
      }
    }, 1000);
  }

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

  setTimerPaused = () => {
    this.setState({
      timerRunning: false
    });
  };

  resetPomodoroTimer = () => {
    this.setState({
      ...this.initialState,
      tasktime: this.state.tasktime,
      breaktime: this.state.breaktime
    });
  };

  render() {
    // const timerProps = {
    //   startTimer: startTimer,
    //   setCurrentTime: setCurrentTime,
    //   setTimerRunning: setTimerRunning
    // }{...timerProps};
    return (
      <div className="app">
        <h1>Pomodoro Timer</h1>
        <Timer
          // state={this.state}
          startTimer={this.startTimer}
          setTimerRunning={this.setTimerRunning}
          timerRunning={this.state.timerRunning}
          setTimerPaused={this.setTimerPaused}
          resetPomodoroTimer={this.resetPomodoroTimer}
          session={this.state.session}
          currentTime={this.state.currentTime}
          tasktime={this.state.tasktime}
          breaktime={this.state.breaktime}
        />
        <div>
          <span>
            <TaskTimer
              tasktime={this.state.tasktime}
              increaseTime={this.increaseTaskTime}
              decreaseTime={this.decreaseTaskTime}
              resetTaskTime={this.resetTaskTime}
            />
            <BreakTimer
              breaktime={this.state.breaktime}
              increaseTime={this.increaseBreakTime}
              decreaseTime={this.decreaseBreakTime}
              resetBreakTime={this.resetBreakTime}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
