import React, { PureComponent } from 'react';

class Dialog extends PureComponent {
  render(){

    if(this.props.isOpen)
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{this.props.title}</h4>
          <button onClick={this.props.onClose} className="dialog__close-btn">+</button>
        </div>
        <div className="dialog__content">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Dialog;
