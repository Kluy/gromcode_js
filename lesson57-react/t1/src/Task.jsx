import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Task extends PureComponent {
  render() {
    const listItemClasses = classNames('list-item', {
      'list-item_done': this.props.done,
    });
    return (
      <li
        onClick={() => this.props.onChange(this.props.id)}
        className={listItemClasses}
      >
        <input
          type="checkbox"
          checked={this.props.done}
          className="list-item__checkbox"
          onChange={() => this.props.onChange(this.props.id)}
        />
        <span className="list-item__text">{this.props.text}</span>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="list-item__delete-btn"
        ></button>
      </li>
    );
  }
}

Task.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
  text: '',
};

export default Task;
