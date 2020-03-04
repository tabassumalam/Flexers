import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

export default class Flexers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            time: 0,
        }

        this.setTime();
    };

    componentDidMount() {
        const socket = socketIOClient('http://localhost:8088');
        socket.on("Global Weight", data => {
            this.setAngle(data);
        });
    }

    setAngle(angle) {
        if (angle > this.state.angle + 10 || angle < this.state.angle - 10) {
            this.resetTime();
        }

        this.setState({ angle: Math.round(angle) });
    }

    resetTime() {
        this.setState({ time: 0 });
    }

    setTime() {
        setInterval(() => {
            this.setState({ time: this.state.time + 1 })
        }, 1000);
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
                <h1 style={this.getStyleTitle()}> FLEXERS </h1>
                <h2 style={this.getStyleBody()}>
                    Your current angle: {this.state.angle} degrees
                    <br></br>
                    Time at current angle:  {(this.state.time)} seconds
                </h2>

            </div>
        );
    }
}