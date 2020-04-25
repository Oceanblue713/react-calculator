import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bCalc: '',
      aCalc: '',
    }
  }

  handleKgChange(event){
    const inputValue = event.target.value;
    this.setState({aCalc: (inputValue * 0.454).toFixed(2)});
  }

  handleCmChange(event){
    this.setState({aCalc: (event.target.value * 30.48).toFixed(2)});
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Box bCalc={this.state.value} 
             bCalcChange={(event) => this.handleKgChange(event)}
             bMetric="lbt" 
             aCalc = {this.state.aCalc} 
             aMetric="Kg" />

        <Box bCalc={this.state.value}
             bCalcChange={(event) => this.handleCmChange(event)}
             bMetric="feet"
             aCalc={this.state.aCalc}
             aMetric="cm" />
      </div>
    );
  }
}

export default App;
