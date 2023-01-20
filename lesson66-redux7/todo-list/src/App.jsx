import React from 'react';
import store from './store';
import ToDoList from './tasks/components/ToDoList';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
     <ToDoList />
    </Provider>
  );
}

export default App;
