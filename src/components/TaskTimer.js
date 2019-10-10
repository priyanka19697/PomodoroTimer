import React, { Component } from "react";

class TaskTimer extends Component {
  // constructor(props){
  //   super(props);

  // }
  render() {
    return (
      <div className="tasktimer">
        <div>{this.props.tasktime}</div>
        <div>Task Time</div>
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

export default TaskTimer;
