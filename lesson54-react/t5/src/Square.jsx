import React from 'react';

const Square = (props) => {
  return (
    <button onClick={props.onClick} className="square">
      {props.value}
    </button>
  );
};

export default Square;
