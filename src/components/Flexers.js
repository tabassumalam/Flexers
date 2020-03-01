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
        this.setState({ angle }) // angle = new data read in , time = 0
        //this.setTime()  // starts counting time from 0
    }

    setTime() {
        setInterval(() => 
            
            this.setState({ time: this.state.time + 1}), 1000);
        
    }

    //useEffect(() => {
     //   getAngle();
    //}, []
    //)
    
    getAngle = async () => {
        const response = await fetch("http://localhost:8088/scale");
        const data = await response.json();
        this.setAngle(data.msg);
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
                <Websocket url='ws://localhost:8088/scale'
                    onMessage={this.setAngle.bind(this)}
                    onMessage= {this.setTime()} />
                <h1 style={this.getStyleTitle()}> FLEXERS </h1>
                <h2 style={this.getStyleBody()}>
                    your current angle: {this.state.angle} degrees
                    <br></br>
                    time at current angle:  {(this.state.time )} seconds
                </h2>

            </div>
        );
    }
}