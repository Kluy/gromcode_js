import React from 'react';
import User from './User';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <BrowserRouter>
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to='/user/github'>Github</Link>
            </li>
            <li className="navigation__item">
              <Link to='/user/facebook'>Facebook</Link>
            </li>
          </ul>
          <Route exact path='/'>
            <span>Select a user please</span>
          </Route>
          <Route path='/user/:userId'>
            <User/>
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
