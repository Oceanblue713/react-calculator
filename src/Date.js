import React, {useState} from 'react';

const Date = (props) => {
  
  const {time, setTime} = useState('aaa');

  return(
    <div>
      <h3>Today is {time}, {props.day}</h3>

    </div>
  )
}

export default Date;