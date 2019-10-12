// Code DigitalClicker Component Her
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state =  {
        timesClicked: 0
    }

    clickHandler = () => {
        console.log(this.state.timesClicked)
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
                {/* i am a DigitalClicker component */}
            </div>
        )
    }
}
