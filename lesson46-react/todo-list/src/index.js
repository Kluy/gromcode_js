import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');

const newElem = <h1 className="title">Todo List</h1>;

ReactDOM.render(newElem, rootElem);
