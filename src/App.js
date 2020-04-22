import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bCalc: '',
      bMetric: "lbt",
      aCalc: '',
      aMetric: "Kg"
    }

    // this.handleKgChange = this.handleKgChange.bind(this);
  }

  handleKgChange(event){
    const inputValue = event.target.value;
    this.setState({aCalc: (inputValue * 0.454).toFixed(2)});
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Box bCalc={this.state.value} 
             bCalcChange={(event) => this.handleKgChange(event)}
             bMetric={this.state.bMetric} 
             aCalc = {this.state.aCalc} 
             aMetric={this.state.aMetric} 
             onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
