import React from "react";
import Filter from "./Filter";
import User from "./User";
import {connect} from 'react-redux';
import { filterTextSelector, usersListSelector } from "./users.selectors";

export const UsersList = ({usersList, filterText}) => {
    return (
        <div>
            <Filter filterText={filterText} count={usersList.length} />
            <ul className="users">
                {usersList.map(user =>
                 <User key={user.id} {...user} />
                 )}
            </ul>
        </div>
    )
}

const mapState = state => {
    return {
        usersList: usersListSelector(state),
        filterText: filterTextSelector(state),
    }
}

const mapDispatch = {

}

export default connect(mapState, mapDispatch) (UsersList);