import React, { Component } from 'react';
import { sendMessage, getMessages } from '../../services/messages.js';
import './Chats.scss';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: [],
    };
    this.writeMessage = this.writeMessage.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  componentDidMount() {
    getMessages().then((data) => {
      this.setState({
        messages: data,
      });
    });
  }
  writeMessage({ target }) {
    this.setState({
      message: target.value,
    });
  }

  sendNewMessage() {
    if (this.state.message.length === 0) {
      return;
    }
    sendMessage(this.state);
    this.setState({ message: '' });
  }

  renderMessages() {
    if (this.state.messages.length === 0) {
      return null;
    }

    const user = JSON.parse(localStorage.getItem('userData') || '{}');


    return this.state.messages.map(message => (
      <div className="allMessages">
        <div className={message.whoSend === user.firstname ? 'view__messagesHost' : 'view__messages'} key={message._id}>
          <fieldset className="messageContent">
            <legend className="whoSend"> {message.whoSend} </legend>
            <div className="textMessage">
              {message.text}
            </div>
            <div className="timeMessage">
              {message.sendTime}
            </div>
          </fieldset>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="chat__content">
        <div className="chat__design">
          <div className="correspondence">
            {this.renderMessages()}
          </div>
          <div className="sedding__messages">
            <input
              className="input__message"
              type="text"
              placeholder="Write a message..."
              onChange={this.writeMessage}
              value={this.state.message}
            />
            <button className="send__message" onClick={this.sendNewMessage}> Send </button>
          </div>
        </div>
      </div>
    );
  }
}

ChatContainer.propTypes = {
  onClick: React.PropTypes.func,
};
ChatContainer.defaultProps = {
  onClick: () => {},
};
