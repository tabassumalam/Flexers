import React, { Component } from 'react';
import Websocket from 'react-websocket';

export default class Flexers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            time: 0,
        }
    };

    setAngle(angle) { // might have to parse data being read in 
        this.setState({ angle, time: 0 }) // angle = new data read in , time = 0
        this.setTime()  // starts counting time from 0
    }

    setTime() {
        setInterval(() =>
            this.setState({ time: this.state.time + 1 }), 1000);
    }

    getStyleTitle = () => {
        return {
            backgroundColor: "#add8e6",
            color: "#ffcb",
            fontStyle: "italic",
            fontFamily: "Courier"

        }
    }

    getStyleBody = () => {
        return {
            backgroundColor: "#ffcb",
            color: "#999990",
            fontStyle: "bold"
        }
    }

    render() {
        return (
            <div>
                <Websocket url='http://localhost:8088/scale12345/'
                    onMessage={this.setAngle.bind(this)} />
                <h1 style={this.getStyleTitle()}> FLEXERS </h1>
                <h2 style={this.getStyleBody()}>
                    your current angle: {this.state.angle} degrees
                    <br></br>
                    time at current angle:  {(this.state.time)} seconds
                </h2>

            </div>
        );
    }
}