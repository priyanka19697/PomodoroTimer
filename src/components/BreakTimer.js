import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";

class BreakTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breaktime: this.props.breaktime,
      session: "break"
    };
  }
  render() {
    return (
      <div className="breaktimer">
        <div>{this.state.breaktime}</div>
        <div>Break Time</div>
        <ButtonGroup
          breaktime={this.state.breaktime}
          session={this.props.session}
          increaseTime={this.props.increaseTime}
          decreaseTime={this.props.decreaseTime}
        />
      </div>
    );
  }
}

export default BreakTimer;
