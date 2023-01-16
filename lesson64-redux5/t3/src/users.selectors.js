import {createSelector} from 'reselect';

export const usersListSelector = (state) => {
  return state.usersList;
};

export const filterTextSelector = (state) => {
  return state.filterText;
};

export const availableOptions = createSelector(
  [usersListSelector, filterTextSelector],
  (users, filterText) => {
     return users.filter(user => user.name.include(filterText)); 
  }
)

// export const selectedOptions = createSelector(
//   [optionsListSelector, idsSelector],
//   (options, ids) => {
//      return options.filter(option => ids.includes(option.id)); 
//   }
// )