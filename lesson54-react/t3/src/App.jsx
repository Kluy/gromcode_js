import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  state = {
    clear: false,
  };

  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
