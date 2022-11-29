import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.decrease = this.decrease.bind(this);
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.decrease}
          data-action="decrease"
          className="counter__button"
        >
          -
        </button>
        <span className="counter__value">{this.state.counter}</span>
        <button
          onClick={this.increase}
          data-action="increase"
          className="counter__button"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
