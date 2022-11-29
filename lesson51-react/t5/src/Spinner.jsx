import React from 'react';

const Spinner = (props) => {
  const spinnerSize = props.size;
  return (
    <span
      className="spinner"
      style={{ width: spinnerSize, height: spinnerSize }}
    ></span>
  );
};

export default Spinner;
