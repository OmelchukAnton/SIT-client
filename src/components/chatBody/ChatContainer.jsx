import React, { Component } from 'react';
import { sendMessage, getMessages, getNewMessages } from '../../services/messages.js';
import { getFirstName } from '../../services/user.js';
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
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const { chatId } = this.props.match.params;
    this.getMessages(chatId);

    this.counter = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillReceiveProps(nextProps) {
    const currentId = this.props.match.params.chatId;
    const nextId = nextProps.match.params.chatId;

    if (currentId !== nextId) {
      this.getMessages(nextId);
    }
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  getMessages(chatId) {
    getMessages(chatId).then((data) => {
      this.setState({
        messages: data,
      });
    });
  }

  tick() {
    const { chatId } = this.props.match.params;

    if (this.state.messages.length === 0) {
      getNewMessages(chatId, 0).then((data) => {
        this.setState({
          messages: data,
        });
      });
    } else {
      const lastMessage = this.state.messages[this.state.messages.length - 1];
      const lastMessageTime = lastMessage.sendTime;
      getNewMessages(chatId, lastMessageTime).then((data) => {
        this.setState({
          messages: [...this.state.messages, ...data],
        });
      });
    }
  }

  scrollToBottom() {
    const { scrollHeight, clientHeight } = this.chat__window_dialog;
    const height = clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chat__window_dialog.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  writeMessage({ target }) {
    this.setState({
      message: target.value,
    });
  }

  sendNewMessage() {
    const chatId = this.props.match.params.chatId;

    if (this.state.message.length === 0) {
      return;
    }

    sendMessage(this.state, chatId);
    this.setState({
      message: '',
    });
  }

  renderMessages() {
    if (this.state.messages.length === 0) {
      return null;
    }

    return this.state.messages.map(message => (
      <div className="allMessages" key={message._id}>
        <div
          className={message.whoSend === getFirstName() ? 'hostsMessages'
            : 'othersMessages'}
        >
          <fieldset className="viewMessage">
            <legend className="viewMessage__whoSend">
              {message.whoSend}
            </legend>
            <div className="message__body">
              <div className="textMessage">
                {message.text}
              </div>
              <div className="timeMessage">
                {message.sendTime}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="chat">
        <div className="chat__window">
          <div
            className="chat__window_dialog"
            ref={(el) => { this.chat__window_dialog = el; }}
          >
            {this.renderMessages()}
          </div>
          <div className="chat__window_send" >
            <input
              className="chat__window_send_input"
              type="text"
              placeholder="Write a message..."
              onChange={this.writeMessage}
              value={this.state.message}
            />
            <button
              className="chat__window_send_button"
              onClick={this.sendNewMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ChatContainer.propTypes = {
  match: React.PropTypes.object.isRequired,
};

ChatContainer.defaultProps = {
  onClick: () => {},
};
