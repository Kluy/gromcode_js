import { getData } from './weather.gateway';

export const SAVE_DATA = 'WEATHER/SAVE_DATA';

export const saveData = (weather) => {
  return {
    type: SAVE_DATA,
    payload: {
      weather,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getData().then((result) => {
      return dispatch(saveData(result));
    });
  };
};
