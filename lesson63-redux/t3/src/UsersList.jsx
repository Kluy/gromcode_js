import React from 'react';
import {connect} from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { nextPage, prevPage } from './pagination.actions';

const UsersList = ({usersList, currentPage, goNext, goPrev}) => {
  return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {usersList
            .slice(currentPage * 3, (currentPage * 3) + 3)
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }

const mapState = state => {
  return {
    usersList: state.users.usersList,
    currentPage: state.currentPage,
  }
}

const mapDispatch = dispatch => {
  return {
    goNext: () => dispatch(nextPage()),
    goPrev: () => dispatch(prevPage()),
  }
}

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
