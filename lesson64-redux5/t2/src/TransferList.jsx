import React from 'react';
import { connect } from 'react-redux';
import AvailableOptions from './options/AvailableOptions';
import { toggleOption } from './options/options.actions';
import { availableOptions, selectedOptions } from './options/options.selectors';
import SelectedOptions from './options/SelectedOptions';

const TransferList = ({ availableOptionsList, selectedOptionsList, moveOption }) => {
  return (
    <>
      <AvailableOptions
        title="Available Options"
        options={availableOptionsList}
        moveOption={moveOption}
      />
      <SelectedOptions
        title="Selected Options"
        options={selectedOptionsList}
        moveOption={moveOption}
      />
    </>
  );
};

const mapState = (state) => {
  return {
    availableOptionsList: availableOptions(state),
    selectedOptionsList: selectedOptions(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(TransferList);
