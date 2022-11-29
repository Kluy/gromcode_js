import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sort: '-',
  };

  sortList = () => {
    this.setState({
      sort: this.state.sort === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    let users = this.props.users.slice();

    if (this.state.sort !== '-') {
      users = users.sort((a, b) =>
        this.state.sort === 'asc' ? a.age - b.age : b.age - a.age
      );
    }

    return (
      <div>
        <button className="btn" onClick={this.sortList}>
          {this.state.sort}
        </button>
        <ul className="users">
          {users.map((elem) => (
            <User key={elem.id} name={elem.name} age={elem.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
