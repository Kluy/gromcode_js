import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    login: false,
    spinner: false,
  };

  login = () => {
    this.setState({
      spinner: true,
    });

    setTimeout(() => {
      this.setState({
        login: true,
        spinner: false,
      });
    }, 2000);
  };

  logout = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    return (
      <>
        {this.state.login ? (
          <Logout onLogout={this.logout} />
        ) : (
          <>
            {this.state.spinner ? (
              <Spinner size={50} />
            ) : (
              <Login onLogin={this.login} />
            )}
          </>
        )}
      </>
    );
  }
}

export default Auth;
