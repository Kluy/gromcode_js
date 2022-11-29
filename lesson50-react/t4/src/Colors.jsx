import React, { Component } from 'react';

class Colors extends Component {
  changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{
            backgroundColor: '#f00',
          }}
          onClick={this.changeColor.bind(this, '#f00')}
          className="colors__button red"
        ></button>
        <button
          style={{
            backgroundColor: '#0f0',
          }}
          onClick={this.changeColor.bind(this, '#0f0')}
          className="colors__button green"
        ></button>
        <button
          style={{
            backgroundColor: '#00f',
          }}
          onClick={this.changeColor.bind(this, '#00f')}
          className="colors__button blue"
        ></button>
      </div>
    );
  }
}

export default Colors;
