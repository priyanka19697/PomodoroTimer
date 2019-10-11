import React, { Component } from "react";

class BreakTimer extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.increaseTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breaktime);
    }
  }

  handleDecrement() {
    this.props.decreaseTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.breaktime);
    }
  }

  render() {
    return (
      <div className="breaktimer">
        <div>{this.props.breaktime}</div>
        <div>Break Time</div>
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

export default BreakTimer;
