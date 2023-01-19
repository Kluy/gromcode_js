import { SAVE_DATA } from './weather.actions';

const initialState = {
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        weather: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
