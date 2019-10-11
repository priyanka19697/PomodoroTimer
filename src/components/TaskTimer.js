import React, { Component } from "react";

class TaskTimer extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.increaseTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }

  handleDecrement() {
    this.props.decreaseTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }
  render() {
    return (
      <div className="tasktimer">
        <div>{this.props.tasktime}</div>
        <div>Task Time</div>
        <div className="buttongroup">
          <button onClick={this.handleIncrement}>+</button>
          <span>
            <button onClick={this.props.reset}>*</button>
          </span>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default TaskTimer;
