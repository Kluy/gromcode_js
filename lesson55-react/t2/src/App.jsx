import React, { Component } from 'react';
import UserMenu from './Profile';
import UserProfile from './ShoppingCart';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <h1 className="title">Hello, John Doe</h1>
        <main className="content">
          <ShoppingCart />
        </main>
      </div>
    );
  }
}

export default App;
