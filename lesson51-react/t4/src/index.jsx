import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status';
import './index.scss';

const root = document.querySelector('#root');

ReactDOM.render(<Status isOnline />, root);
