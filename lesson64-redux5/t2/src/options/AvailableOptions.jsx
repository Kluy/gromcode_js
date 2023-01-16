import React from 'react';
import Options from './Options';

const AvailableOptions = ({ title, options, moveOption }) => {
  return <Options title={title} options={options} moveOption={moveOption} />;
};

export default AvailableOptions;
