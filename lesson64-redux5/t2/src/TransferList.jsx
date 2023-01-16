import React from 'react';
import { connect } from 'react-redux';
import AvailableOptions from './options/AvailableOptions';
import { toggleOption } from './options/options.actions';
import SelectedOptions from './options/SelectedOptions';

const TransferList = ({ optionsList, moveOption }) => {
  return (
    <>
      <AvailableOptions
        title="Available Options"
        options={optionsList}
        moveOption={moveOption}
      />
      <SelectedOptions
        title="Selected Options"
        options={optionsList}
        moveOption={moveOption}
      />
    </>
  );
};

const mapState = (state) => {
  return {
    optionsList: state.options.optionsList,
    selectedOptions: state.options.selectedOptions,
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(TransferList);
