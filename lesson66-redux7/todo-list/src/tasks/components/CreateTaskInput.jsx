import React from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = (props) => {
  return (
    <div className="create-task">
      <input
        // onChange={props.onChange}
        className="create-task__input"
        type="text"
        // value={props.input}
      />
      <button
      //  onClick={props.onCreate}
       className="btn create-task__btn">
        Create
      </button>
    </div>
  );
};

// CreateTaskInput.propTypes = {
//   input: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   onCreate: PropTypes.func.isRequired,
// };

// CreateTaskInput.defaultProps = {
//   input: '',
// };

export default CreateTaskInput;
