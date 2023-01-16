export const FILTER = 'USERS/FILTER';

export const toggleOption = (filterText) => {
  return {
    type: FILTER,
    payload: {
      filterText,
    },
  };
};
