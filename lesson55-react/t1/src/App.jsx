import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: this.props.userId,
        location: null,
        avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4',
      },
    };
  }

  getUserData = () => {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json)
      .then(({ name, location, avatar_url }) =>
        this.setState(
          (userData = {
            name: name,
            location: location,
            avatar_url: avatar_url,
          })
        )
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
