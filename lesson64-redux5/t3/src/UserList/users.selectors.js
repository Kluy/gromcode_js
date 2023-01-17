import {createSelector} from 'reselect';

export const usersListSelector = (state) => {
  return state.usersList;
};

export const filterTextSelector = (state) => {
  return state.filterText;
};

export const usersListFiltered = createSelector(
  [usersListSelector, filterTextSelector],
  (users, filterText) => {
     return users.filter(({name}) => name.toLowerCase().includes(filterText.toLowerCase())); 
  }
)