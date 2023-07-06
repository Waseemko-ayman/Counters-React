import React from 'react';

export default class Total extends React.Component {
    render() {
      const { counters } = this.props;
      const total = counters.reduce((accumulator, counter) => accumulator + counter, 0);
      const myStyle = {
        textAlign: "Center",
        fontSize: "30px"
      };
      return (
        <div>
          <p style={myStyle}>Total: {total}</p>
        </div>
      );
    }
  }