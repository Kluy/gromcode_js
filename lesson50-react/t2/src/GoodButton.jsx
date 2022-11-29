import React, { Component } from 'react';

class GoodButton extends Component {
  handleClick = (e) => {
    alert(e.target.textContent);
  };

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        click me
      </button>
    );
  }
}

export default GoodButton;
