import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
  state = {
    currentPage: 1,
    firsUserID: 0,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      firsUserID: this.state.firsUserID + 3,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      firsUserID: this.state.firsUserID - 3,
    });
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {this.props.users
            .slice(this.state.firsUserID, this.state.firsUserID + 3)
            .map((elem) => (
              <User key={elem.id} name={elem.name} age={elem.age} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
