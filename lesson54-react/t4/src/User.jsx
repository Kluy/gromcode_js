import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <li className="user">
        <span className="user__name">{this.props.name}</span>
        <span className="user__age">{this.props.age}</span>
      </li>
    );
  }
}

export default User;
