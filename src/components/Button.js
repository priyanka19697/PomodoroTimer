import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState: "play"
    };

    // this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.buttonState === "play") {
      this.setState({
        buttonState: "pause"
      });
      handleClick();
    } else {
      this.setState({
        buttonState: "play"
      });
      handleClick();
    }
  }

  handleClick() {
    if (this.state.buttonState === "play") {
    } else {
      this.props.timerRunning = false;
      pauseCountDown();
    }
  }
}
export default Button;
