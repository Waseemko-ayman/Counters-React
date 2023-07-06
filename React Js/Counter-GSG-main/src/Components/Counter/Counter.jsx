import React from 'react';
import './style.css'
import Total from '../Total/Total';

export default class Counter extends React.Component {

  state = {
    value: 0
  };

  handleIncrement = () => {
    const { value } = this.state;
    const { onIncrement } = this.props;
    const newValue = value + 1;
    this.setState({ value: newValue });
    onIncrement(newValue);
  }

  handleDecrement = () => {
    const { value } = this.state;
    const { onDecrement } = this.props;
    const newValue = value - 1;
    this.setState({ value: newValue });
    onDecrement(newValue);
  }

  render() {
    const { value } = this.state;

    return (
      <div className='counter-box'>
        <span>{value}</span>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

<Total />
