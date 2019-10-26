// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
 state = {
     timesClicked: 0
 }

 handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

 render() {
  return(
   <div>
       <button onClick={this.handleClick}>
           {this.state.timesClicked > 0 ? this.state.timesClicked : 0 }
       </button>
   </div>
    )
   }
 }



export default DigitalClicker