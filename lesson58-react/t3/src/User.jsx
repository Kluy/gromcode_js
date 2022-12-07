import React from 'react';

const User = ({ match }) => {
  return (
    <div class="user">
      <img
        alt="User Avatar"
        src="https://avatars1.githubusercontent.com/u/9919?v=4"
        class="user__avatar"
      />
      <div class="user__info">
        <span class="user__name">GitHub</span>
        <span class="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};

export default User;
