import React, { Component, PropTypes } from 'react';

class DigitalClicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	timesClicked: 0
        }
    }

    render() {
        return (
            <button onClick = {this.clickHandler}>{this.state.timesClicked}</button> 
        );
    }

    clickHandler = () => {
    	this.setState({
    		timesClicked: this.state.timesClicked + 1
    	})
    }
}

export default DigitalClicker;

