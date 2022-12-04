import React from 'react';

const CreateTaskInput = (props) => {
  return (
    <div className="create-task">
      <input onChange={props.onChange} className="create-task__input" type="text" value={props.input} />
      <button onClick={props.onCreate}  className="btn create-task__btn">Create</button>
    </div>
  );
}

export default CreateTaskInput;
