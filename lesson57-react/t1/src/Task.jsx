import React, { PureComponent } from 'react';

class Task extends PureComponent  {
  // ({text, done, id, handleDone})

  render(){
  const taskClassName = `list-item ${this.props.done ? 'list-item_done' : ''}`

  return (
    <li onClick={this.props.handleDone} id={this.props.id} className={taskClassName}>
        <input type="checkbox" className="list-item__checkbox" />
          {this.props.text}
        <button className="list-item__delete-btn"></button>
      </li>
  );
}
}

export default Task;
