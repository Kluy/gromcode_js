import React from 'react';
import Clock from './Clock';

const App = (props) => {
  return (
    <>
      <Clock location="London" offset={0} />
      <Clock location="Berlin" offset={1} />
      <Clock location="Kyiv" offset={2} />
    </>
  );
};

export default App;
