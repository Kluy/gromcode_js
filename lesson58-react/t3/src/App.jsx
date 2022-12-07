import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
