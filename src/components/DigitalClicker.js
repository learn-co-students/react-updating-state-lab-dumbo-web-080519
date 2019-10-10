import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        const clicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: clicked
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}