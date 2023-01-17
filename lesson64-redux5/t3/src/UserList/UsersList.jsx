import React from "react";
import Filter from "./Filter";
import User from "./User";
import {connect} from 'react-redux';
import { filterTextSelector, usersListFiltered } from "./users.selectors";
import { filterUsers } from "./users.actions";

export const UsersList = ({usersList, filterText, filterHandler}) => {
    return (
        <div>
            <Filter filterText={filterText} count={usersList.length} onChange={filterHandler} />
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
        usersList: usersListFiltered(state),
        filterText: filterTextSelector(state),
    }
}

// const mapDispatch = (dispatch) => {
//     return {
//         filter: () => dispatch(filterUsers),
//     }
// }

const mapDispatch = {
    filterHandler: filterUsers
}




export default connect(mapState, mapDispatch) (UsersList);