import React, { Component } from 'react';

class Mailbox extends Component {
  render() {
    return (
      <div className="mailbox">
        <span className="mailbox__text">messages</span>

        {this.props.unreadMessages.length > 0 && (
          <span className="mailbox__count">
            {this.props.unreadMessages.length}
          </span>
        )}
      </div>
    );
  }
}

export default Mailbox;
