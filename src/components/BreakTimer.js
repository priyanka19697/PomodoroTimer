import React, { Component } from "react";

class BreakTimer extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.increaseTime();
  }

  handleDecrement() {
    this.props.decreaseTime();
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
