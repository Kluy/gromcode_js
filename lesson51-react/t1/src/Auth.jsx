import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  login = () => {
    console.log('login');
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.logout} />
        ) : (
          <Login onLogin={this.login} />
        )}
      </div>
    );
  }
}

export default Auth;
