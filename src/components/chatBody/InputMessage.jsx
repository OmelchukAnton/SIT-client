import React, { Component } from 'react';
import './Chats.scss';

export default class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    // this.writeMessage = this.writeMessage.bind(this);
    // this.sendMessage = this.sendMessage.bind(this);
  }

  // writeMessage({ target }) {
  //   this.setState({
  //     message: target.value,
  //   });
  //   // console.log(this.state)
  //   // this.props.onMessageChange(target.value);
  // }
  //
  // sendMessage() {
  //   this.props.onClick(this.writeMessage);
  // }

  // writeMessage({ target }) {
  //   this.setState({
  //     message: target.value,
  //   });
  // }
  //
  // sendMessage() {
  //
  // }

  render() {
    return (
      <div className="sedding__messages">
        <input
          className="input__message"
          type="text"
          placeholder="Write a message..."
        />
        <button className="send__message"> send </button>
      </div>
    );
  }
}

InputMessage.propTypes = {
};
InputMessage.defaultProps = {
};
