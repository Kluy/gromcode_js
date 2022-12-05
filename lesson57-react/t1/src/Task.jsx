import React, { PureComponent } from 'react';
import classNames from 'classnames';

class Task extends PureComponent  {
  // ({text, done, id, handleDone})

  render(){
  const liClasses = classNames('list-item', {'list-item_done':this.props.done})

  return (
    <li  className={liClasses}>
       <input onClick={() => this.props.onChange(this.props.id)} type="checkbox" className="list-item__checkbox" />
          {this.props.task}
       <button onClick={() => this.props.onDelete(this.props.id)} className="list-item__delete-btn"></button>
    </li>
  );
}
}

export default Task;
