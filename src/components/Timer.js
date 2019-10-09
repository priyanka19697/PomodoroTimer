import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.props.state.session === "work"
      ? this.setState({ time: this.props.state.tasktime })
      : this.setState({ time: this.props.state.breaktime });
  }

  render() {
    return (
      <div className="timer">
        <div>{this.state.time}</div>
        <button>start</button>
        <button>restart</button>
      </div>
    );
  }
}

export default Timer;
