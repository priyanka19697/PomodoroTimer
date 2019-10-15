import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleCountDown = this.handleCountDown.bind(this);
  }

  handleCountDown() {
    var button = document.getElementById("start-pause");
    const { pauseCountDown, startCountDown } = this.props;

    if (button.getAttribute("name") === "start") {
      startCountDown();
      button.setAttribute("name", "pause");
      button.innerHTML = "pause";
    } else {
      button.setAttribute("name", "start");
      button.innerHTML = "start";
      pauseCountDown();
    }
  }
  render() {
    console.log(this.props, "from timer");
    return (
      <div className="timer">
        <button id="start-pause" name="start" onClick={this.handleCountDown}>
          start
        </button>
        <button onClick={this.props.resetPomodoroTimer}>reset</button>
      </div>
    );
  }
}
export default Button;
