import React from 'react';
import {connect} from 'react-redux';
import * as usersActions from './users.actions';

const Users = ({usersList, addUser, deleteUser}) => {
  return (
    <div className="users">
      <button onClick={addUser} className="users__create-btn">Create user</button>
      <ul className="users__list">
        {usersList.map(elem => {
          return (
            <li className="users__list-item">
              <span>User # {elem.id}</span>
              <button onClick={deleteUser} className="users__delete-btn">+</button>
            </li>
          )
        })}
      </ul>
    </div>
    )
}

const mapState = state => {
    return {
        usersList: state.users.usersList,
    }
}

const mapDispatch = {
    addUser: usersActions.addUser,
    deleteUser: usersActions.deleteUser,
}

const connector = connect(mapState, mapDispatch);

export default connector(Users);