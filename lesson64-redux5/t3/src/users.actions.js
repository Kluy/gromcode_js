export const FILTER = 'USERS/FILTER';

export const filterUsers = (filterText) => {
  return {
    type: FILTER,
    payload: {
      filterText,
    },
  };
};
