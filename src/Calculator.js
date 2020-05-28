import React from 'react';
import Box from './box';
import { BackButton } from './BackButton';
import Time from './Time';

class Calculator extends React.Component{
  constructor(props) {
    super(props);
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

  handleInchCmChange(event){
    this.setState({aCalc5: (event.target.value * 2.54).toFixed(2)});
  }

  handleCelsiusFahChange(event) {
    this.setState({aCalc6: (event.target.value * 9/5 + 32).toFixed(2)});
  }

  handleTeaChange(event) {
    this.setState({aCalc7: (event.target.value * 3)});
  }

  render(){
    const bCalcState = this.state.value

    return (
      <div className="flexbox-container">
        <Time />
        <BackButton />
        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleMlChange(event)}
             bMetric="oz"
             aCalc={this.state.aCalc3}
             aMetric="ml" />

        <Box bCalc={bCalcState} 
             bCalcChange={(event) => this.handleKgChange(event)}
             bMetric="lb" 
             aCalc = {this.state.aCalc1} 
             aMetric="Kg" />

        <Box bCalc={bCalcState} 
             bCalcChange={(event) => this.handleTeaChange(event)}
             bMetric="Tablespoon"
             aCalc={this.state.aCalc7}
             aMetric="Teaspoon"
        />

        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleCelsiusFahChange(event)}
             bMetric="&#8451;"
             aCalc={this.state.aCalc6}
             aMetric="F" />

        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleInchCmChange(event)}
             bMetric="Inch"
             aCalc={this.state.aCalc5}
             aMetric="cm" />

        <Box bCalc={bCalcState}
             bCalcChange={(event) => this.handleCmChange(event)}
             bMetric="feet"
             aCalc={this.state.aCalc2}
             aMetric="cm" />

        <Box bCalc={bCalcState} 
             bCalcChange={(event) => this.handleKmChange(event)}
             bMetric="mile"
             aCalc={this.state.aCalc4}
             aMetric="Km" />
      </div>
    );
  }
}

export default Calculator;