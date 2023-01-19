import React from 'react';
import { getWeatherData } from './weather.actions';
import { weatherSelector } from './weather.selectors';

const Weather = () => {
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        <li className="city">
          <span className="city__name">Lake Hilmaside</span>
          <span className="city__temperature">78 F</span>
        </li>
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weather: weatherSelector(state),
  };
};

const mapDispatch = {
  getWeather: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
