import React, { Component } from 'react';
import moment from 'moment';

class Transaction extends Component {
  numberFormatter = new Intl.NumberFormat('en-GB');

  render() {
    return (
      <li className="transaction">
        <span className="transaction__date">
          {moment(this.props.time).format('DD MMM')}
        </span>
        <span className="transaction__time">
          {moment(this.props.time).format('hh:mm')}
        </span>
        <span className="transaction__assets">
          {this.props.from} → {this.props.to}
        </span>
        <span className="transaction__rate">{this.props.rate}</span>
        <span className="transaction__amount">
          {this.numberFormatter.format(this.props.amount)}
        </span>
      </li>
    );
  }
}

export default Transaction;
//  <li className="transaction">
//    <span className="transaction__date">10 Jan</span>
//    <span className="transaction__time">19:08</span>
//    <span className="transaction__assets">USD → EUR</span>
//    <span className="transaction__rate">0.8</span>
//    <span className="transaction__amount">1,200</span>
//  </li>;
