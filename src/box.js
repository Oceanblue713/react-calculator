import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <h3>{props.bMetric} to {props.aMetric}</h3>
      <div className="box-item">
        <input type="text" value={props.bCalc} onChange={props.bCalcChange}/> {props.bMetric} <br/>
        <h1>=</h1>
  <h1>{props.aCalc} {props.aMetric}</h1>
      </div>
    </div>
  )
}

export default Box;