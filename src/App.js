import React, { Component } from 'react';
import Flexers from './components/Flexers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 }
};

  render() {
    return (
      <div className="App">
        <Flexers />
      </div>
    );
  }
}

export default App;
