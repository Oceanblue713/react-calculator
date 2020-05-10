import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClock: false,
      time: 0,
    }
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <h2>00:00</h2>
        <button>Start</button><button>Stop</button><button>Reset</button>
      </div>

    )
  }
}

export default Timer;