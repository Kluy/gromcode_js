import React from 'react';

const Options = ({title, options, moveOption}) => {
    return (
        <div className="options">
            <div className="options__title">Available options</div>
            <ul className="options__list">
      <li><button className="options__list-item">19-inch wheels</button></li>
      <li><button className="options__list-item">B&amp;O Sound System</button></li>
      <li><button className="options__list-item">Adaptive Cruise Control</button></li>
      <li><button className="options__list-item">Auto High-Beam Headlamps</button></li>
      <li><button className="options__list-item">Carbon Sport Interior</button></li>
            </ul>
        </div>
    );
}

export default Options;