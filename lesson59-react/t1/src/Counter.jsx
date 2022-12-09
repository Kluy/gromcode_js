import React, {useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div class="counter">
      <button class="counter__button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span class="counter__value">
        {counter}
      </span>
      <button class="counter__button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
