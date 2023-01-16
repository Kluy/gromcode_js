import React from 'react';
import { connect } from 'react-redux';
import AvailableOptions from './options/AvailableOptions';
import { toggleOption } from './options/options.actions';
import { optionsList, selectedList } from './options/options.selectors';
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
    optionsList: optionsList,
    selectedOptions: selectedList,
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(TransferList);
