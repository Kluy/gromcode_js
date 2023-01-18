import React, { useState } from "react";
import { connect } from "react-redux";
import * as userActions from './user.actions';
import { fetchUser } from "./user.gateway";

const SearchField = ({showSpinner, saveUser}) => {

    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value);
    } 

    const fetchUserData = () => {
        showSpinner();
        fetchUser(userName).then(result => saveUser(result));
    }

    return (
        <div className="name-form">
            <input onChange={(e) => handleChange(e)} value={userName} type="text" className="name-form__input" />
            <button onClick={fetchUserData} className="name-form__btn btn">Show</button>
        </div>
    )
}

const mapDispatch = {
    showSpinner: userActions.showSpinnerAction,
    saveUser: userActions.saveUser,
}

export default connect(null, mapDispatch) (SearchField);
