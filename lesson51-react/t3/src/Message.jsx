import React from 'react';

const Message = (props) => {
  if (!props.text) return null;

  return <div className="message">{props.text}</div>;
};

export default Message;
