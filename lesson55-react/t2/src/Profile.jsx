import React from 'react';
import UserForm from './UserForm';

const Profile = (props) => {
  return (
    <div className="column">
      <UserForm userData={props.userData} />
    </div>
  );
};

export default Profile;
