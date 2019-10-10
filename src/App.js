import React, { Component } from "react";
import Timer from "./components/Timer";
import TaskTimer from "./components/TaskTimer.js";
import BreakTimer from "./components/BreakTimer.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasktime: 25,
      breaktime: 5,
      seconds: 0,
      session: "work"
    };
    this.increaseTaskTime = this.increaseTaskTime.bind(this);
    this.decreaseTaskTime = this.decreaseTaskTime.bind(this);
    this.increaseBreakTime = this.increaseBreakTime.bind(this);
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this);
    this.resetTaskTime = this.resetTaskTime.bind(this);
    this.resetBreakTime = this.resetBreakTime.bind(this);
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
    this.setState({
      tasktime: this.state.tasktime - 1
    });
    console.log(this.state, "decremented tasktime");
  }
  decreaseBreakTime() {
    this.setState({
      breaktime: this.state.breaktime - 1
    });
    console.log(this.state, "decremented breaktime");
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

  render() {
    return (
      <div className="app">
        <h1>Pomodoro Timer</h1>
        <Timer state={this.state} />
        <div>
          <span>
            <TaskTimer
              tasktime={this.state.tasktime}
              increaseTime={this.increaseTaskTime}
              decreaseTime={this.decreaseTaskTime}
              reset={this.resetTaskTime}
            />
            <BreakTimer
              breaktime={this.state.breaktime}
              increaseTime={this.increaseBreakTime}
              decreaseTime={this.decreaseBreakTime}
              reset={this.resetBreakTime}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
