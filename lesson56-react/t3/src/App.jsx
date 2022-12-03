import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {isOpen: false}

  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen});
  }

  render() {
    return (
      <div className="app">
        <Expand onToggle={this.handleToggle} isOpen={this.state.isOpen} title='Some title'>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
