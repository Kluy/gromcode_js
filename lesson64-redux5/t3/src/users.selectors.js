import {createSelector} from 'reselect';

export const usersListSelector = (state) => {
  return state.usersList;
};

export const filterTextSelector = (state) => {
  return state.filterText;
};

// export const availableOptions = createSelector(
//   [optionsListSelector, idsSelector],
//   (options, ids) => {
//      return options.filter(option => !ids.includes(option.id)); 
//   }
// )

// export const selectedOptions = createSelector(
//   [optionsListSelector, idsSelector],
//   (options, ids) => {
//      return options.filter(option => ids.includes(option.id)); 
//   }
// )