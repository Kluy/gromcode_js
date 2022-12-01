import React from 'react';

const TemperatureInput = (props) => {

    return (
      <fieldset>
        <legend>Enter temperature in {props.scale}:</legend>
        <input value={props.temperature} onChange={props.onTemperatureChange} />
      </fieldset>
    );
}

export default TemperatureInput;
