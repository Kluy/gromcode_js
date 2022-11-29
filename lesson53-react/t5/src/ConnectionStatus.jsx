import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: 'online',
  };

  statusChange = (e) => {
    this.setState({
      online: e.target.navigator.onLine ? 'online' : 'offline',
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.statusChange);
    window.addEventListener('offline', this.statusChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusChange);
    window.removeEventListener('offline', this.statusChange);
  }

  render() {
    return (
      <div
        className={
          this.state.online === 'online' ? 'status' : 'status status_offline'
        }
      >
        {this.state.online}
      </div>
    );
  }
}

export default ConnectionStatus;
