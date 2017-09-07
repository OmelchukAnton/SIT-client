import React, { Component } from 'react';
import { sendMessage } from '../../services/messages.js';
import './Chats.scss';

export default class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.writeMessage = this.writeMessage.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  writeMessage({ target }) {
    this.setState({
      message: target.value,
    });
  }

  sendNewMessage() {
    sendMessage(this.state);
  }


  render() {
    return (
      <div className="sedding__messages">
        <input
          className="input__message"
          type="text"
          placeholder="Write a message..."
          onChange={this.writeMessage}
          value={this.state.message}
        />
        <button className="send__message" onClick={this.sendNewMessage}> send </button>
      </div>
    );
  }
}

InputMessage.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
InputMessage.defaultProps = {
};
