import React from 'react';
import { Link } from 'react-router-dom';

const styleBackButton = {
  "display": "flex",
  "justify-content": "center",
  "align-items": "center",
};

const styleH2 = {
  "background-image": "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "border-radius": 4,
  "padding": 7,
  "width": 150,
  "color": "whitesmoke",
}

export const BackButton = ({title, route}) => {
  return (
    <div className="back-button" style={styleBackButton}>
      <Link to={route}><h2 style={styleH2}>{title}</h2></Link>
    </div>
  )
}
