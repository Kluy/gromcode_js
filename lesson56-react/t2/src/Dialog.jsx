import React, { PureComponent } from 'react';

class Dialog extends PureComponent {
  render(){
    return (
      <div class="dialog">
        <div class="dialog__heading">
          <h4 class="dialog__title">{this.props.title}</h4>
          <button onClick={this.props.om} class="dialog__close-btn">+</button>
        </div>
        <div class="dialog__content">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Dialog;
