import React, { Component } from "react";

class ButtonGroup extends Component {
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
      <div>
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

export default ButtonGroup;
