import {createSelector} from 'reselect';

export const optionsListSelector = (state) => {
  return state.optionsList;
};

export const idsSelector = (state) => {
  return state.selected;
};

export const availableOptions = createSelector(
  [optionsListSelector, idsSelector],
  (options, ids) => {
     return options.filter(option => !ids.includes(option.id)); 
  }
)

export const selectedOptions = createSelector(
  [optionsListSelector, idsSelector],
  (options, ids) => {
     return options.filter(option => ids.includes(option.id)); 
  }
)