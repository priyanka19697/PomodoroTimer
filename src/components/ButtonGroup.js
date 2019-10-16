import React, { Component } from "react";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleIncrement, reset, handleDecrement } = this.props;
    return (
      <div>
        <div className="buttongroup">
          <button onClick={handleIncrement}>+</button>
          <span>
            <button onClick={reset}>*</button>
          </span>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
