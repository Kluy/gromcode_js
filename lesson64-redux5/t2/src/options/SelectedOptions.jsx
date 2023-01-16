import React from 'react';
import Options from './Options';

const SelectedOptions = ({ title, options, moveOption }) => {
  return <Options title={title} options={options} moveOption={moveOption} />;
};

export default SelectedOptions;
