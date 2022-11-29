import React from 'react';

const NumbersList = (props) => {
  return (
    <ul>
      {props.numbers.slice().map((num) => (
        <li>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
