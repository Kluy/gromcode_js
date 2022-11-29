import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('#root');

const newElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(newElem, rootElem);
