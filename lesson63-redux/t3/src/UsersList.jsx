import React from 'react';
import {connect} from 'react-redux';
import * as paginationActions from './pagination.actions'
import Pagination from './Pagination';
import User from './User';


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
            .map((elem) => (
              <User key={elem.id} name={elem.name} age={elem.age} />
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

const mapDispatch = {
  goNext: paginationActions.nextPage,
  goPrev: paginationActions.prevPage,
}

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
