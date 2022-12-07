import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Products from './Products';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
