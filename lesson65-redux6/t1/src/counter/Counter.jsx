import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({counter}) => {
    retrun (
        <div className="counter">
            <button className="counter__button">-</button>
            <span className="counter__value">{counter}</span>
            <button className="counter__button">+</button>
        </div>
    )
}

const mapState = (state) = {
    counter: state,
}

const mapDispatch = {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
    reset: counterActions.reset,
}

export default connect(mapState, mapDispatch)(Counter);