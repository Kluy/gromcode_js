import { SAVE_DATA } from './weather.actions';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_DATA:
      return action.payload.weather;
    default:
      return state;
  }
};

export default weatherReducer;
