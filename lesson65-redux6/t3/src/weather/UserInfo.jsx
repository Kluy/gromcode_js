import React from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import * as userActions from './user.actions';
import { isFetchingSelector, userDataSelector } from "./user.selectors";

const UserInfo = ({isFetching, userData}) => {
    
    if(!userData)
        return null;

    if(isFetching){
        return <Spinner/>
    }

    return (
        <div className="user">
            <img
              alt="User Avatar"
              src={userData.avatar_url}
              className="user__avatar"
            />
            <div className="user__info">
              <span className="user__name">{userData.name}</span>
              <span className="user__location">{userData.location}</span>
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        userData: userDataSelector(state),
        isFetching: isFetchingSelector(state),
    }
}

export default connect(mapState, null) (UserInfo);