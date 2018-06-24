import React from 'react';

class SystemClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.computeDate(),
    };
  }

  componentDidMount() {
    this.timerHandle = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  tick() {
    this.setState({
      date: this.computeDate(),
    });
  }

  computeDate(date = new Date()) {
    date.setFullYear(2077);

    return date;
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString() + ' // ' +  this.state.date.toDateString()}
      </div>
    );
  }
}

export default SystemClock;
