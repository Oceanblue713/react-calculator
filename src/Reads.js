import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Reads.css';
import { BackButton } from './BackButton';
import Time from './Time';

export const Reads = () => {
  return (
    <div className="reads">
      <Time />
      <BackButton title={"Home"} route={"/"}/>
        <Link to="/article1"><h2>Calorie Control</h2></Link>
        <Link to="/article2"><h2>Tools for beginners</h2></Link>
        <Link to="/article3"><h2>Seasoning for beginners</h2></Link>
    </div>
  );
}
