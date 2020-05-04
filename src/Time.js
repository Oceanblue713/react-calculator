import React from 'react';

const Time = (props) => {
  return(
    <div>
      <h3>Today is {props.date.toLocaleTimeString()}</h3>

    </div>
  )
}

export default Time;