import React, { Component } from 'react';

const Dialog = (props) => {

    if(props.isOpen)
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{props.title}</h4>
          <button onClick={props.onClose} className="dialog__close-btn">+</button>
        </div>
        <div className="dialog__content">
          {props.children}
        </div>
      </div>
    );
};

export default Dialog;
