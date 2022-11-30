import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userData: {
      firstName:'John',
      lastName:'Doe',
    }};
  }

  render() {

    const {firstName, lastName} = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">Hello, {firstName} {lastName}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state.userData} />
        </main>
      </div>
    );
  }
}

export default App;
