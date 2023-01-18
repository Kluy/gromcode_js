import React, { useState } from "react";
import { connect } from "react-redux";
import {userNameSelector} from './user.selectors';
import * as userActions from './user.actions';

const SearchField = ({fetchUser, inputValue, changeInput}) => {
    return (
        <div className="name-form">
            <input onChange={(e) => changeInput(e.target.value)} value={inputValue} type="text" className="name-form__input" />
            <button onClick={() => fetchUser(inputValue)} className="name-form__btn btn">Show</button>
        </div>
    )
}

const mapState = (state) => {
    return {
        inputValue: userNameSelector(state),
    }
}

const mapDispatch = {
    fetchUser: userActions.fetchUserData,
    changeInput: userActions.inputAction,
}

export default connect(mapState, mapDispatch) (SearchField);
