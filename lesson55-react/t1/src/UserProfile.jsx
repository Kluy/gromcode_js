import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src="https://avatars1.githubusercontent.com/u/9919?v=4"
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">GitHub</span>
          <span className="user__location">San Francisco, CA</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
