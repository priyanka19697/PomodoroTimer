import React, { Component } from "react";

class BreakTimer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="breaktimer">
        <div>{this.props.breaktime}</div>
        <div>Break Time</div>
        <div className="buttongroup">
          <button onClick={this.props.increaseTime}>+</button>
          <span>
            <button onClick={this.props.reset}>*</button>
          </span>
          <button onClick={this.props.decreaseTime}>-</button>
        </div>
      </div>
    );
  }
}

export default BreakTimer;
