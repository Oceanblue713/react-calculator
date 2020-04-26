import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bCalc: '',
    }
  }

  handleKgChange(event){
    const inputValue = event.target.value;
    this.setState({aCalc1: (inputValue * 0.454).toFixed(2)});
  }

  handleCmChange(event){
    this.setState({aCalc2: (event.target.value * 30.48).toFixed(2)});
  }

  handleMlChange(event){
    this.setState({aCalc3: (event.target.value * 29.57).toFixed(2)});
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Box bCalc={this.state.value} 
             bCalcChange={(event) => this.handleKgChange(event)}
             bMetric="lb" 
             aCalc = {this.state.aCalc1} 
             aMetric="Kg" />

        <Box bCalc={this.state.value}
             bCalcChange={(event) => this.handleCmChange(event)}
             bMetric="feet"
             aCalc={this.state.aCalc2}
             aMetric="cm" />

        <Box bCalc={this.state.value}
             bCalcChange={(event) => this.handleMlChange(event)}
             bMetric="oz"
             aCalc={this.state.aCalc3}
             aMetric="ml" />
      </div>
    );
  }
}

export default App;
