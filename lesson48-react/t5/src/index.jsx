import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Profile
    userData={{
      firstName: 'James',
      lastName: 'Bond',
      birthDate: '1991-01-17T11:11:11.819Z',
      birthPlace: 'London',
    }}
  />,
  rootElem
);
