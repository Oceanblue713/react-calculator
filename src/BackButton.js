import React from 'react';

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

export const BackButton = () => {
  return (
    <div className="back-button" style={styleBackButton}>
      <a href="/"><h2 style={styleH2}>Home</h2></a>
    </div>
  )
}
