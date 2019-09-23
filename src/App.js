import React, { Component } from 'react';
import Countdown from './Countdown.js';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
    <div>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </div>
    );
  }
}

export default App;