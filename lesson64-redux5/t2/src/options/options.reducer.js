import { TOGGLE } from './options.actions';

const initialState = {
  options: {
    optionsList: [
      {
        id: 'id-0',
        name: '19-inch wheels',
      },
      {
        id: 'id-1',
        name: 'Leather-trimmed Sport Seats',
      },
      {
        id: 'id-2',
        name: 'B&O Sound System',
      },
      {
        id: 'id-3',
        name: 'Adaptive Cruise Control',
      },
      {
        id: 'id-4',
        name: 'Daytime running lights',
      },
      {
        id: 'id-5',
        name: 'Auto High-Beam Headlamps',
      },
      {
        id: 'id-6',
        name: 'Carbon Sport Interior',
      },
    ],
    selected: [],
  },
};

export const optionsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        options: {
          ...state.options,
          selected: state.options.selected.concat(action.payload.id),
        },
      };
    }
    default:
      return state;
  }
};
