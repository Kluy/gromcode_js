import React from 'react';
import { connect } from 'react-redux';
import AvailableOptions from './options/AvailableOptions';
import { moveOption } from './options/options.actions';
import SelectedOptions from './options/SelectedOptions';

const TransferList = ({optionsList}) => {
    return (
        <>
            <AvailableOptions title='Available Options' options={optionsList}  />
            <SelectedOptions title='Selected Options'  options={optionsList} />
        </>

    );
}

const mapState = (state) => {
    return {
        optionsList: state.options.optionsList,
        selectedOptions: state.options.selectedOptions,
    }
}

const mapDispatch = {
    moveOption: moveOption,
}

export default connect(mapState, mapDispatch)(TransferList);