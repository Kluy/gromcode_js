import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    const transactions = this.props.transactions.slice();
    return (
      <ul className="transactions">
        {transactions.map((elem) => (
          <Transaction
            key={elem.id}
            from={elem.from}
            to={elem.to}
            amount={elem.amount}
            rate={elem.rate}
            time={elem.time}
          />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
