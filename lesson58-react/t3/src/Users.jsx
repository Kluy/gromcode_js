import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from './User';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <a href="/users/github">Github</a>
        </li>
        <li class="navigation__item">
          <a href="/users/facebook">Facebook</a>
        </li>
      </ul>
      <h1>users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/ball">Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users">
          <span>Select a product please</span>
        </Route>
        <Route path="/users/:productId" component={Product} />
      </Switch>
    </div>
  );
};

export default Users;
