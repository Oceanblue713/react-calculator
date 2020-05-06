import React from 'react';
import Box from './box';
import './App.css';
import {Nav} from './Nav';
import Calculator from './Calculator';
import Time from './Time';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Time />
        <Calculator />
      </div>
    );
  }
}

export default App;
