import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Home.css';

class Home extends React.Component{
  render(){
    return(
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
          <footer>&copy;AJLily</footer>
      </div>
      
    )
  }
}

export default Home;