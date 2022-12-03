import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {isOpen: false}

  handleClose = () => {
    this.setState({isOpen:false});
  }

  render() {
    return (
      <div className="app">
        <button onClick={() => this.setState({isOpen:true})} className="btn">Show dialog</button>
        <Dialog onClose={this.handleClose} isOpen={this.state.isOpen} title='Recommendation'>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
