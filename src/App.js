import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      length: ''}
  }

  handleChange(e){
    this.setState({length: e.target.length});
  }

  render(){
    return (
      <div className="App">
        <input type="text" value={this.state.length} onChange={(event) => this.handleChange(event)}/> lbt<br/>
        <h1>=</h1>
        <h1>0 kg</h1>
      </div>
    );
  }
}

export default App;
