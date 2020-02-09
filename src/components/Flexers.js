import React, { Component } from 'react';

export default class Flexers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 260,
            time: 0,
        }

        this.setTime()
    };

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
            <div >
                <h1 style= {this.getStyleTitle()}> FLEXERS </h1>
                <h2 style = {this.getStyleBody()}>
                    your current angle: {this.state.angle} degrees 
                    <br></br>
                    time at current angle:  {(this.state.time)} seconds
                </h2>

            </div>
        );
    }
}