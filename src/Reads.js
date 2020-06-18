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
        <a href="/article1"><h2>Calorie Control</h2></a>
        <a href="/article2"><h2>Tools for beginners</h2></a>
        <a href="/article3"><h2>Seasoning for beginners</h2></a>
    </div>
  );
}