import React from 'react';
import Counter from './Counter';

const App = (props) => {
  return (
    <>
      <Counter start={0} interval={1000} />
      <Counter start={500} interval={5000} />
      <Counter start={-1000} interval={100} />
    </>
  );
};

export default App;
