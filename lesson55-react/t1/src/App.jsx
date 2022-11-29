import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
  state = {
    clear: false,
  };

  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData />
        </header>
        <UserProfile />
      </div>
    );
  }
}

export default App;
