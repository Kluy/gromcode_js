import React from 'react';

const UserMenu = (props) => {
  return (
    <div className="menu">
      <span className="menu__greeting">Hello, {props.userData.name}</span>
      <img
        alt="User Avatar"
        src={props.userData.avatar_url}
        className="menu__avatar"
      />
    </div>
  );
};

export default UserMenu;
