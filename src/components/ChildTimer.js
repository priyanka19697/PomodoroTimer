import React, { Component } from "react";

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
    console.log(this.props.name, "from childtimer");
    return (
      <div className={this.props.name + "timer"}>
        {this.props.name === "Task" ? (
          <div>{this.props.tasktime}</div>
        ) : (
          <div>{this.props.breaktime}</div>
        )}
        {/* <div>{this.props.time}</div> */}
        <div>{this.props.name}time</div>
        <div className="buttongroup">
          <button onClick={this.handleIncrement}>+</button>
          <span>
            <button onClick={this.reset}>*</button>
          </span>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ChildTimer;
