import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 30,
      timer: null,
    };
  }

  componentDidMount() {
    const ticktack = 1000;
    const timer = setInterval(this.tick, ticktack);
    this.setState({ timer });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  tick = () => {
    const { counter } = this.state;
    const { timeOut, timer, stop, next } = this.props;
    if (counter > 0 && !stop) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }), () => {
        timer(counter);
      });
    } else {
      timeOut();
    }

    if (!next && stop) {
      this.setState({
        counter: 30,
      });
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>{ counter }</p>
      </div>
    );
  }
}

Timer.propTypes = {
  timeOut: PropTypes.func,
}.isRequired;

export default Timer;
