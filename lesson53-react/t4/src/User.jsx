import React, { Component } from 'react';

class User extends Component {
  state = {};

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          name: data.name,
          location: data.location,
          avatar: data.avatar_url,
        });
      });
  }

  render() {
    if (this.state.avatar) {
      return (
        <div className="user">
          <img
            alt="User Avatar"
            src={this.state.avatar}
            className="user__avatar"
          />
          <div className="user__info">
            <span className="user__name">{this.state.name}</span>
            <span className="user__location">{this.state.location}</span>
          </div>
        </div>
      );
    }
  }
}

export default User;
