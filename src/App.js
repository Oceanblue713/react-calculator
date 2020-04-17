import React from 'react';
import Box from './box';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Box metric="lbt" number = "0"/>
      </div>
    );
  }
}

export default App;
