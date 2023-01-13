import React from 'react';
import {connect} from 'react-redux';
import * as usersActions from './users.actions';

const Users = ({usersList, addUser, deleteUser}) => {

    
    const createUser = () => {
        const id = Math.round(Math.random() * 1000000);
      addUser({
        id,
        name: 'User # ' + id,
      })
    }

  return (
    <div className="users">
      <button onClick={createUser} className="users__create-btn">Create user</button>
      <ul className="users__list">
        {usersList.map(elem => {
          return (
            <li key={elem.id} className="users__list-item">
              <span>{elem.name}</span>
              <button onClick={() => deleteUser(elem.id)} className="users__delete-btn">+</button>
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