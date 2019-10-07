import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  };

  handleClick = () => {
    const numClicks = this.state.timesClicked + 1;
    this.setState({
      timesClicked: numClicks
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}
