import React from 'react';

const UserForm = (props) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value="John"
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value="Doe"
      />
    </form>
  );
};

export default UserForm;
