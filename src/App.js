import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';
import Calculator from './Calculator';
import Time from './Time';
import StopWatch from './StopWatch';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Time />
        <StopWatch />
        <Calculator />
      </div>
    );
  }
}

export default App;
