import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0,
    }
    this.timer = '';
  }

  handleStart(){
    this.setState({
      isStarted: true,
    });
    this.timer = setInterval(() => this.setState({time: this.state.time + 1}), 1000);
  }

  handleStop(){
    this.setState({
      isStarted: false,
    });
    clearInterval(this.timer);
  }

  handleReset(){
    this.setState({
      isStarted: false,
      time: 0,
    });
    clearInterval(this.timer);
  }

  render() {
    console.log(this.state.time);
    let button;
    if(this.state.isStarted){
      button = (<button id="stop-button" onClick={() => {this.handleStop()}}>Stop</button>)
    } else {
      button = (<button id="start-button" onClick={() => {this.handleStart()}}>Start</button>)
    }
    return (
      <div>
        <h2>StopWatch</h2>
        <h2>{this.state.time}</h2>
        <h2>{button} <button id="reset-button" onClick={() => {this.handleReset()}}>Reset</button></h2>
      </div>

    )
  }
}

export default StopWatch;