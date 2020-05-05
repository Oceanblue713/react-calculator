import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';
import Time from './Time';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  handleKgChange(event){
    this.setState({aCalc1: (event.target.value * 0.454).toFixed(2)});
  }

  handleCmChange(event){
    this.setState({aCalc2: (event.target.value * 30.48).toFixed(2)});
  }

  handleMlChange(event){
    this.setState({aCalc3: (event.target.value * 29.57).toFixed(2)});
  }

  handleKmChange(event){
    this.setState({aCalc4: (event.target.value * 1.609).toFixed(3)});
  }

  render(){
    const bCalcState = this.state.value

    return (
      <div className="App">
        <Nav />
        <Time />
        <Box bCalc={bCalcState} 
             bCalcChange={(event) => this.handleKgChange(event)}
             bMetric="lb" 
             aCalc = {this.state.aCalc1} 
             aMetric="Kg" />

        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleCmChange(event)}
             bMetric="feet"
             aCalc={this.state.aCalc2}
             aMetric="cm" />

        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleMlChange(event)}
             bMetric="oz"
             aCalc={this.state.aCalc3}
             aMetric="ml" />

        <Box bCalc={bCalcState} 
             bCalcChange={(event) => this.handleKmChange(event)}
             bMetric="mile"
             aCalc={this.state.aCalc4}
             aMetric="Km" />
      </div>
    );
  }
}

export default App;
