import React from 'react';
import {connect} from 'react-redux';
import * as paginationActions from './users.actions'
import Pagination from './Pagination';
import User from './User';
import { currentPageSelector, usersListSelector } from './users.selectors';


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
            .sort((a, b) => a.name > b.name ? 1 : -1)
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
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
    // usersList: state.users.usersList,
    // currentPage: state.users.currentPage,
  }
}

const mapDispatch = {
    goNext: paginationActions.nextPage,
    goPrev: paginationActions.prevPage,
  
}

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
