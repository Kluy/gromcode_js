import React from 'react';
import { getWeatherData } from './weather.actions';
import { weatherSelector } from './weather.selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Weather = ({ weather, getWeather }) => {
  useEffect(() => getWeather(), []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weather.map((elem) => (
          <li key={elem.id} className="city">
            <span className="city__name">{elem.name}</span>
            <span className="city__temperature">{elem.temperature}</span>
          </li>
        ))}
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
