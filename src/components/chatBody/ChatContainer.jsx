import React, { Component } from 'react';
import { sendMessage, getMessages } from '../../services/messages.js';
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

  getMessages(chatId) {
    getMessages(chatId).then((data) => {
      this.setState({
        messages: data,
      });
    });
  }

  scrollToBottom() {
    const scrollHeight = this.correspondence.scrollHeight;
    const height = this.correspondence.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.correspondence.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
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
        <div className={message.whoSend === getFirstName() ? 'view__messagesHost' : 'view__messages'} >
          <fieldset className="messageContent">
            <legend className="whoSend"> {message.whoSend} </legend>
            <div className="message__body">
              <div className="mini__ava">
                ava
              </div>
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
      <div className="chat__content">
        <div className="chat__design">
          <div className="correspondence" ref={(el) => { this.correspondence = el; }}>
            {this.renderMessages()}
          </div>
          <div className="sedding__messages" >
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
  match: React.PropTypes.object.isRequired,
};
ChatContainer.defaultProps = {
  onClick: () => {},
};
