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
    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
  }

  increaseTime() {
    if (this.state.session === "work") {
      this.setState = {
        tasktime: this.state.tasktime + 1
      };
      console.log("incremented tasktime");
    } else {
      this.setState = {
        breaktime: this.state.breaktime + 1
      };
      console.log("incremented breaktime");
    }
  }

  decreaseTime() {
    // this.state.session === "work"
    //   ? (this.setState = {
    //       tasktime: this.state.tasktime - 1
    //     })
    //   : (this.setState = {
    //       breaktime: this.state.breaktime - 1
    //     });
    if (this.state.session === "work") {
      this.setState = {
        tasktime: this.state.tasktime - 1
      };
      console.log("decremented tasktime");
    } else {
      this.setState = {
        breaktime: this.state.breaktime - 1
      };
      console.log("decremented breaktime");
    }
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
              increaseTime={this.increaseTime}
              decreaseTime={this.decreaseTime}
            />
            <BreakTimer
              breaktime={this.state.breaktime}
              increaseTime={this.increaseTime}
              decreaseTime={this.decreaseTime}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
