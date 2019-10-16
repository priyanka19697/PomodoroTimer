import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";

class ChildTimer extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleIncrement() {
    const { increaseTime, name } = this.props;
    increaseTime(name);
  }

  handleDecrement() {
    const { decreaseTime, name } = this.props;
    decreaseTime(name);
  }
  reset() {
    const { reset, name } = this.props;
    reset(name);
  }

  render() {
    const { name, tasktime, breaktime } = this.props;
    return (
      <div className={name + "timer"}>
        {this.props.name === "Task" ? (
          <div>{tasktime}</div>
        ) : (
          <div>{breaktime}</div>
        )}
        <div>{name}time</div>
        <ButtonGroup
          name={name}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default ChildTimer;
