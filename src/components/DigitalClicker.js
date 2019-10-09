// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }
  handleClick = () => {
    // console.log(this.state)
    const addClicks = this.state.timesClicked
    this.setState({
      timesClicked: addClicks + 1
    })
  }
  render(){
    // console.log(this.state.timesClicked)
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
export default DigitalClicker
