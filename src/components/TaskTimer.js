import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";

class TaskTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasktime: this.props.tasktime,
      session: "work"
    };
  }
  render() {
    return (
      <div className="tasktimer">
        <div>{this.state.tasktime}</div>
        <div>Task Time</div>
        <ButtonGroup
          tasktime={this.state.tasktime}
          session={this.props.session}
          increaseTime={this.props.increaseTime}
          decreaseTime={this.props.decreaseTime}
        />
      </div>
    );
  }
}

export default TaskTimer;
