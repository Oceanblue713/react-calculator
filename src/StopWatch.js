import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0,
    }
  }

  componentDidMount() {
    if(this.state.isStarted){
      this.timeID = setInterval(() => this.setState({time: this.state.time+1}), 1000);
      // console.log(this.state.isStarted);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
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

  handleReset(){
    this.setState({
      isStarted: false,
      time: 0,
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
        <h2>StopWatch</h2>
        <h2>{this.state.time}</h2>
        <h2>{button} <button id="reset-button" onClick={() => {this.handleReset()}}>Reset</button></h2>
      </div>

    )
  }
}

export default StopWatch;