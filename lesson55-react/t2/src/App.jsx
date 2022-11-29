import React, { Component } from 'react';
import Profile from './Profile';
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
          <Profile />
        </main>
      </div>
    );
  }
}

export default App;
