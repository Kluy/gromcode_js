import React from "react";
import Filter from "./Filter";
import User from "./User";

export const UsersList = () => {
    return (
        <div>
            <Filter />
            <ul className="users">
                <User />
            </ul>
        </div>
    )
}

export default UsersList;