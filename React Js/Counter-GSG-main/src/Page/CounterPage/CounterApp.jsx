import React from 'react';
import Counter from '../../Components/Counter/Counter';
import Total from '../../Components/Total/Total';

class CounterApp extends React.Component {

    state = {
      counters: [0, 0, 0, 0]
    };
  
    handleIncrement = (index) => {
      const { counters } = this.state;
      const newCounters = [...counters];
      newCounters[index]++;
      this.setState({ counters: newCounters });
    }
  
    handleDecrement = (index) => {
      const { counters } = this.state;
      const newCounters = [...counters];
      newCounters[index]--;
      this.setState({ counters: newCounters });
    }
  
    render() {
      const { counters } = this.state;
  
      return (
        <div>
          <Counter
            value={counters[0]}
            onIncrement={(value) => this.handleIncrement(0, value)}
            onDecrement={(value) => this.handleDecrement(0, value)}
          />
          <Counter
            value={counters[1]}
            onIncrement={(value) => this.handleIncrement(1, value)}
            onDecrement={(value) => this.handleDecrement(1, value)}
          />
          <Counter
            value={counters[2]}
            onIncrement={(value) => this.handleIncrement(2, value)}
            onDecrement={(value) => this.handleDecrement(2, value)}
          />
          <Total counters={counters} />
        </div>
      );
    }
  }
  
  export default CounterApp;