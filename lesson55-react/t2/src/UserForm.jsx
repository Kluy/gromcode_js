import React from 'react';

const UserForm = (props) => {
  return (
    <form onChange={props.onChange} className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
      />
    </form>
  );
};

export default UserForm;
