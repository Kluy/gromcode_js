import React, { Component } from 'react';

class UserMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, GitHub</span>
        <img
          alt="User Avatar"
          src="https://avatars1.githubusercontent.com/u/9919?v=4"
          className="menu__avatar"
        />
      </div>
    );
  }
}

export default UserMenu;
