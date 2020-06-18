import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Home.css';
import Time from './Time';

class Home extends React.Component{
  render(){
    return(
      <div>
        <Time />
        <div className="Home">
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/calculator">
            <h2>Calculator</h2>
          </Link>
          <Link to="/watch">
            <h2>Watch</h2>
          </Link>
          <Link to="/reads">
            <h2>Short Reads</h2>
          </Link>
        </div>
        <footer>&copy;AJLily</footer>
      </div>
    )
  }
}

export default Home;
