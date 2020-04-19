import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <div className="box-item">
        <input type="text" value={props.bCalc}/>{props.bMetric} <br/>
        <h1>=</h1>
  <h1>{props.aCalc} {props.aMetric}</h1>
      </div>
    </div>
  )
}

export default Box;