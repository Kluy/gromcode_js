import {createSelector} from 'reselect';

export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const idsSelector = (state) => {
  return state.options.selected;
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

// export const availableOptions = (state) => {
//   return optionsListSelector(state).filter(option => !idsSelector(state).includes(option.id)); 
// }

// export const selectedOptions = (state) => {
//   return optionsListSelector(state).filter(option => idsSelector(state).includes(option.id)); 
// }