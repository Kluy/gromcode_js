import ReactDOM from 'react-dom/client';
import React from "react";
import App from "./App";
import './index.scss';

// ReactDOM.render(<App/>, document.querySelector('#root'));
// console.log(document.querySelector('#root'))

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);