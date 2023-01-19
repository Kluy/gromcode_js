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

export const getWeatherData = (weatherData) => {
  return function (dispatch) {
    getData(weatherData).then((result) => dispatch(saveData(result)));
  };
};
