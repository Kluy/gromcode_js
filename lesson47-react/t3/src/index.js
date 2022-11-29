import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElem = document.querySelector('#root');

const render = () => {
  const seconds = new Date().getSeconds();
  const textColor = seconds % 2 === 0 ? 'black' : 'white';
  const backgroundColor = seconds % 2 === 0 ? 'white' : 'black';

  const newElem = (
    <div className="seconds" style={{ color: textColor, backgroundColor }}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(newElem, rootElem);
};

setInterval(() => render(), 1000);
