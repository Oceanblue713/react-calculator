import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state={date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    let month;
    let monthNow = this.state.date.getMonth();
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for(let i= 0; i < monthArray.length; i++){
      if(monthNow === i) {
        month = monthArray[i];
      }
    }

    return(
      <div className="Time">
        <h2>{month} {this.state.date.getDate()}    {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }    
}

export default Time;