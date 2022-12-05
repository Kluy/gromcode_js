import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Task extends PureComponent  {
  // ({text, done, id, handleDone})

  render(){
    const listItemClasses = classNames('list-item', {'list-item_done':this.props.done});
    return (
      <li  className={listItemClasses}>
         <input onClick={() => this.props.onChange(this.props.id)} type="checkbox" defaultChecked={this.props.done} className="list-item__checkbox" />
            {this.props.task}
         <button onClick={() => this.props.onDelete(this.props.id)} className="list-item__delete-btn"></button>
      </li>
    );
  }
}

Task.propTypes = {
  done:PropTypes.bool,
  id:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
}

Task.defaultProps = {
  done:false,
}

export default Task;
