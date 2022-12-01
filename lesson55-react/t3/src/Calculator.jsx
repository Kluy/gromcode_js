import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange = (e) => {
    const temperature = e.target.value;
    this.setState({ scale:'c',  temperature});
  }

  handleFahrenheitChange = (e) => {
    const temperature = e.target.value;
    this.setState({ scale:'f', temperature });
  }

  toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5 / 9);

  toFahrenheit = (celsius) => ((celsius * 9 / 5) + 32);

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
