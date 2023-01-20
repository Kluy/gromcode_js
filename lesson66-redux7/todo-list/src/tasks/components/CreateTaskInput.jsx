import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CreateTaskInput = ({onCreate}) => {

  const[input, setInput] = useState('');

  return (
    <div className="create-task">
      <input
        onChange={(e) => setInput(e.target.value)}
        className="create-task__input"
        type="text"
        value={input}
      />
      <button
        onClick={() => onCreate(input)}
        className="btn create-task__btn">
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
