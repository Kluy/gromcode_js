import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {isOpen: false}

  render() {
    return (
      <div class="app">
        <button class="btn">Show dialog</button>
        <Dialog title='Recommendation'>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
