import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({onChange, onDelete, id, text, done }) => {
    const listItemClasses = classNames('list-item', {
      'list-item_done': done,
    });
    return (
      <li
        onClick={() => onChange(id)}
        className={listItemClasses}
      >
        <input
          type="checkbox"
          checked={done}
          className="list-item__checkbox"
          onChange={() => onChange(id)}
        />
        <span className="list-item__text">{text}</span>
        <button
          onClick={() => onDelete(id)}
          className="list-item__delete-btn"
        ></button>
      </li>
    );
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
