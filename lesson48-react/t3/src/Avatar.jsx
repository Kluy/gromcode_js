import React from 'react';
import './avatar.scss';

function Avatar(props) {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
}

export default Avatar;
