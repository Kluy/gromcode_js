import React from 'react';

const Logout = (props) => {
  return (
    <button className="btn logout" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
