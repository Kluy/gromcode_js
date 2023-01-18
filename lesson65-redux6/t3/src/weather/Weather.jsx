import React from 'react';

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
    )
}

export default Weather;