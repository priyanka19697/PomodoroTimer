import React, { Component } from "react";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breaktime: this.props.breaktime,
      tasktime: this.props.tasktime,
      session: this.props.session,
      increaseTime: this.props.increaseTime,
      decreaseTime: this.props.decreaseTime
    };
  }
  render() {
    return (
      <div className="buttongroup">
        <button onClick={this.state.increaseTime}>+</button>
        <span>
          <button>*</button>
        </span>
        <button onClick={this.state.decreaseTime}>-</button>
      </div>
    );
  }
}

export default ButtonGroup;
