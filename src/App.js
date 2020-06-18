import React from 'react';
import './App.css';
import {Nav} from './Nav';
import Home from './Home';
import {About} from './About';
import Calculator from './Calculator';
import {Reads} from './Reads';
import StopWatch from './StopWatch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { article1 } from './articles/article1';
import { article2 } from './articles/article2';
import { article3 } from './articles/article3';

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
          <Route path="/reads" component = {Reads}/>
          <Route path="/article1" component = {article1} />
          <Route path="/article2" component = {article2} />
          <Route path="/article3" component = {article3} />
        </Router>
      </div>
    );
  }
}

export default App;
