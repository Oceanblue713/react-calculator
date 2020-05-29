import React from 'react';
import './App.css';
import {Nav} from './Nav';
import Home from './Home';
import {About} from './About';
import Calculator from './Calculator';
import StopWatch from './StopWatch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About}/>
          <Route path="/calculator" component = {Calculator} />
          <Route path="/watch" component = {StopWatch} />
        </Router>
      </div>
    );
  }
}

export default App;
