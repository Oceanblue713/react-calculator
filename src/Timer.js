import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0,
    }
  }

  handleStart(){
    this.setState({
      isStarted: true,
    })
  }

  handleStop(){
    this.setState({
      isStarted: false,
    })
  }

  render() {
    let button;
    if(this.state.isStarted){
      button = (<button id="stop-button" onClick={() => {this.handleStop()}}>Stop</button>)
    } else {
      button = (<button id="start-button" onClick={() => {this.handleStart()}}>Start</button>)
    }
    return (
      <div>
        <h2>Timer</h2>
        <h2>00:00</h2>
        <h2>{button} <button id="reset-button">Reset</button></h2>
      </div>

    )
  }
}

export default Timer;


