import React from 'react';

const Expand = (props) => {

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{props.title}</span>
          <button onClick={props.onToggle} className="expand__toggle-btn">
            {props.isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
          </button>
        </div>
        {props.isOpen && <div className="expand__content">{props.children}</div>}
      </div>
    );
};

export default Expand;
