import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <div className="box-item">
        <input type="text"/>{props.metric} <br/>
        <h1>=</h1>
        <h1>{props.number} kg</h1>
      </div>
    </div>
  )
}

export default Box;