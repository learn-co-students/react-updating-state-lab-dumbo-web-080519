// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bitrateHandler = () => {
        console.log(this.state.settings.bitrate)
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    
    resolutionHandler= () => {
        console.log(this.state.settings.video)
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }



    render() {
        return (
            <div>
                <button onClick={this.bitrateHandler} className='bitrate'>Change Bitrate</button>
                <button onClick={this.resolutionHandler} className='resolution'>Change Resolution</button>
            </div>
        )
    }
}
