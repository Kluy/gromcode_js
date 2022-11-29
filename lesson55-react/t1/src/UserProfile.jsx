import React from 'react';

const UserProfile = (props) => {
  if (!props.userData) return null;

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={props.userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{props.userData.name}</span>
        <span className="user__location">{props.userData.location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
