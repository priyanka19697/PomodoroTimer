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
    this.props.increaseTime(this.props.name);
  }

  handleDecrement() {
    this.props.decreaseTime(this.props.name);
  }
  reset() {
    this.props.reset(this.props.name);
  }

  render() {
    return (
      <div className={this.props.name + "timer"}>
        {this.props.name === "Task" ? (
          <div>{this.props.tasktime}</div>
        ) : (
          <div>{this.props.breaktime}</div>
        )}
        <div>{this.props.name}time</div>
        <ButtonGroup
          name={this.props.name}
          increaseTime={this.props.increaseTime}
          decreaseTime={this.props.decreaseTime}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default ChildTimer;
