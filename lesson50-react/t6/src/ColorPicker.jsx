import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  clear = () => {
    this.setState({
      colorName: '',
    });
  };

  setColorName = (color) => {
    this.setState({
      colorName: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            onMouseLeave={this.clear}
            onMouseEnter={this.setColorName.bind(this, 'Coral')}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseLeave={this.clear}
            onMouseEnter={this.setColorName.bind(this, 'Aqua')}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseLeave={this.clear}
            onMouseEnter={this.setColorName.bind(this, 'Bisque')}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
