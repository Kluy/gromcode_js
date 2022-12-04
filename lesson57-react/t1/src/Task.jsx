import React, { PureComponent } from 'react';
import classNames from 'classnames';

class Task extends PureComponent  {
  // ({text, done, id, handleDone})

  render(){
  const liClasses = classNames('list-item', {'list-item_done':this.props.done})

  return (
    <li onClick={this.props.onDone} id={this.props.id} className={liClasses}>
        <input type="checkbox" className="list-item__checkbox" />
          {this.props.text}
        <button className="list-item__delete-btn"></button>
      </li>
  );
}
}

export default Task;
