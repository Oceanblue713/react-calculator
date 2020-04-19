import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bMetric: "lbt",
      aCalc: 0,
      aMetric: "Kg"
    }
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Box bCalc="" bMetric={this.state.bMetric} aCalc = {this.state.aCalc} aMetric= {this.state.aMetric}/>
      </div>
    );
  }
}

export default App;
