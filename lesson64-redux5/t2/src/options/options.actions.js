export const TOGGLE = 'OPTIONS/TOGGLE';

export const toggleOption = (id) => {
  return {
    type: TOGGLE,
    payload: {
      id,
    },
  };
};
